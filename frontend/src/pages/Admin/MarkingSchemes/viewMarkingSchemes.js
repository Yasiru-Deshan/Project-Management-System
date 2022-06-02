import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import download from 'downloadjs';
import axios from 'axios';
import './styles.css';
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';

export default function ViewMarkingSchemes() {

  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get('http://localhost:8070/admin/markingschemes/getAllFiles');
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`http://localhost:8070/admin/markingschemes/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  // Delete panel
  const deleteFile = async(id) => {
    let deletion;

    if(window.confirm("Are you sure about deleting this file?")){
        deletion = await axios.delete(`http://localhost:8070/admin/markingschemes/delete/${id}`);
    }
    if(deletion) {
        window.location = "/admin/markingschemes/view"
    }    
}

  return (
    <div className="it19184722-myForm-adminDashboard">
    <h2 className="it19184722-h2">Marking Schemes Management</h2>
    <HeroBg/>
    <div className="files-container">
    <Link to="/admin/markingschemes/upload" className="btn it19184722-green-btn-upload">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
    </svg>
    Upload new schema
    </Link>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table  className="it19184722-table">
        <thead className="it19184722-thead">
          <tr>
            <th className="it19184722-th">Title</th>
            <th className="it19184722-th">Description</th>
            <th className="it19184722-th-btn">Action</th>
          </tr>
        </thead>
        <tbody className="it19184722-tbody">
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
                <tr key={_id} className="it19184722-tr">
                  <td className="it19184722-td">{title}</td>
                  <td className="it19184722-td">{description}</td>
                  <td className="it19184722-td-btn">
                    <a
                      className="btn btn-primary"
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                    Download
                    </a>
                    <button onClick={() => deleteFile(_id)} className="btn btn-danger it19184722-mybtn it19184722-red-btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                    Delete</button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};