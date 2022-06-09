import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      company: this.state.com,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="member github link"
            name="twitter"
           
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="member github link"
            name="facebook"
           
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="member github link"
            name="linkedin"
           
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="member github link"
            name="youtube"
            
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="member github link"
            name="instagram"
            
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select research category', value: 0 },
      { label: 'Autonomous Intenlligence Machines and Systems', value: 'Autonomous Intenlligence Machines and Systems' },
      { label: 'Machine Learning and Soft Computing', value: 'Machine Learning and Soft Computing' },
      { label: 'Knowledge Inspired Computing', value: 'Knowledge Inspired Computing' },
      { label: 'Computing for Inclusive and Equitable Society', value: 'Computing for Inclusive and Equitable Society' },
      { label: 'Computing Infastructure and security', value: 'Computing Infastructure and security' },
      { label: 'Software Systems and Technologies', value: 'Software Systems and Technologies' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Research Group</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Topic"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique research topic for your research group"
                />
                 <SelectListGroup
              
              placeholder="Research Group"
              //className= "text-dark btn btn-primary dropdown-toggle dropdown-menu dropdown-item"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
              options={options}
              error={errors.status}
              info="The research group your research is fallen into"
            />
              <TextFieldGroup
                  placeholder="Research Area"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Please use comma separated values (eg.ML,HCI,IOT,CC)"
                />
            <TextFieldGroup
              placeholder="Supervisor's Name"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
              error={errors.company}
              info="Enter a supervisor whom you have chosen"
            />
             <TextFieldGroup
              placeholder= "Co-Supervisor's Name"
              name="company"
              value={this.state.com}
              onChange={this.onChange}
              error={errors.comp}
              info="Enter a Co-supervisor whom you have chosen"
            />
            <TextFieldGroup
              placeholder="Group leader's name"
              name="githubusername"
              value={this.state.githubusername}
              onChange={this.onChange}
              error={errors.githubusername}
              info="Appointed group leader's name"
            />
             <TextFieldGroup
                  placeholder="*Group members"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Enter all the group members starting from the leader.Please use comma separated values "
                    
                />
            
          
            <TextAreaFieldGroup
              placeholder="Short Bio"
              name="bio"
              value={this.state.bio}
              onChange={this.onChange}
              error={errors.bio}
              info="Tell us a little about the research idea"
            />


                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                     Add github links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
