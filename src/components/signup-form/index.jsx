import React, { Component } from 'react';
import Form from './form';

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
      console.log(this.state.values);
      event.target.reset();
      this.setState({ values: initialValues, agreement: false });
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
               />
            </div>
         </div>
      );
   }
}

export default SignupForm;
