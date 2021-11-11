import React, { Component } from 'react';
import Form from './form';

class SplitForm extends Component {
   state = {
      name: '',
      email: '',
      password: '',
   };

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   };

   handleSubmit = event => {
      event.preventDefault();
      this.setState({ name: '', email: '', password: '' });
      event.target.reset();
   };
   render() {
      return (
         <div className="container">
            <h1 className="text-center"> - Controlled Form - </h1>
            <hr />
            <Form
               values={this.state}
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
            />
         </div>
      );
   }
}

export default SplitForm;
