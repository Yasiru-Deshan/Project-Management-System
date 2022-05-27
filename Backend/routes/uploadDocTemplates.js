const router = require('express').Router();
const multer = require('multer');

const File = require('../models/documentTemplate');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './DocumentTemplates');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size 10MB = 10000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});


router.route("/delete/:id").delete( async(req,res)=>{

  try{
      const file = await File.findById(req.params.id);
          await file.deleteOne();
          res.status(200).json("The document template has been deleted, Successfully!")
  
  }catch(err){
      res.status(500).json(err);
  }
});


// router.get('/download/:id', async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);
//     res.set({
//       'Content-Type': file.file_mimetype
//     });
//     res.sendFile(path.join(__dirname, '..', file.file_path));
//   } catch (error) {
//     res.status(400).send('Error while downloading file. Try again later.');
//   }
// });

module.exports = router;