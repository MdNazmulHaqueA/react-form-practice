import React, { Component } from 'react';

class ControlledForm extends Component {
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
      const { name, email, password } = this.state;
      return (
         <div className="container">
            <h1 className="text-center"> - Controlled Form - </h1>
            <hr />
            <form onSubmit={this.handleSubmit}>
               <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.handleChange}
               />
               <input
                  className="form-control my-2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={this.handleChange}
               />
               <input
                  className="form-control my-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
               />
               <button type="submit" className="btn btn-success">
                  Submit
               </button>
            </form>
         </div>
      );
   }
}

export default ControlledForm;
