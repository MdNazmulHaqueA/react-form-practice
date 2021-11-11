import React, { Component } from 'react';

class UncontrolledForm extends Component {
   handleSubmit = event => {
      event.preventDefault();
      //console.dir(event.target)
      const data = {};
      data.name = event.target.name.value;
      data.email = event.target.email.value;
      data.password = event.target.password.value;
      // console.log(data);
      event.target.reset();
   };
   render() {
      return (
         <div className="container">
            <h1 className="text-center">Uncontrolled Form</h1>
            <hr />
            <form onSubmit={this.handleSubmit}>
               <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  placeholder="Your Name"
               />
               <input
                  className="form-control my-2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
               />
               <input
                  className="form-control my-2"
                  type="password"
                  name="password"
                  placeholder="Password"
               />
               {/* <input type="submit" value="Submit" /> */}
               <button type="submit" className="btn btn-success">
                  Submit
               </button>
            </form>
         </div>
      );
   }
}

export default UncontrolledForm;
