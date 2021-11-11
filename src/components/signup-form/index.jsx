import React, { Component } from 'react';
import Form from './form';
import PropTypes from 'prop-types';

const initialValues = {
   name: '',
   email: '',
   password: '',
   birthDate: '',
   gender: '',
};
export class SignupForm extends Component {
   state = {
      values: initialValues,
      agreement: false,
      errors: {},
   };

   handleChange = event => {
      this.setState({
         values: {
            ...this.state.values,
            [event.target.name]: event.target.value,
         },
      });
   };

   handleAgreement = event => {
      this.setState({
         agreement: event.target.checked,
      });
   };

   handleSubmit = event => {
      event.preventDefault();
      // console.log(this.state.values);
      // event.target.reset();
      // this.setState({ values: initialValues, agreement: false });
      const { errors, isValid } = this.validate();
      if (isValid) {
         // console.log(this.state.values);
         this.props.createUser(this.state.values);
         event.target.reset();
         this.setState({ values: initialValues, agreement: false, errors: {} });
      } else {
         // console.log(errors);
         this.setState({ errors });
      }
   };

   // validation basic

   validate = () => {
      const errors = {};
      const {
         values: { name, email, password, gender, birthDate },
      } = this.state;

      if (!name) {
         errors.name = 'Please Provide Your Name';
      } else if (name.length > 30) {
         errors.name = 'Name must be between 5 to 30 characters';
      }

      if (!email) {
         errors.email = 'Please provide your email';
      }

      if (!password) {
         errors.password = 'Please provide password';
      }

      if (!birthDate) {
         errors.birthDate = 'Birth of date missing';
      }

      if (!gender) {
         errors.gender = 'Please select your gender';
      }

      return {
         // errors:errors
         errors,
         isValid: Object.keys(errors).length === 0,
      };
   };

   render() {
      return (
         <div>
            <div className="container">
               <h1 className="text-center">Signup Form</h1>
               <Form
                  values={this.state.values}
                  agreement={this.state.agreement}
                  handleChange={this.handleChange}
                  handleAgreement={this.handleAgreement}
                  handleSubmit={this.handleSubmit}
                  errors={this.state.errors}
               />
            </div>
         </div>
      );
   }
}

SignupForm.propTypes = {
   createUser: PropTypes.func.isRequired,
};

export default SignupForm;
