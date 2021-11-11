import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/signup-form';
// import SplitForm from './components/split-form';
// import UncontrolledForm from './componets/forms/UncontrolledForm';
// import ControlledForm from './components/forms/ControlledForm';
// import Inputs from './components/Inputs/Inputs';

class App extends Component {
   state = {
      users: [],
   };
   createUser = user => {
      user.id = new Date().getTime().toString();
      this.setState({
         users: [...this.state.users, user],
      });
   };

   render() {
      return (
         <div>
            <h1 className="mt-3 text-center">Practice Forms in React</h1>
            <hr />
            <br />
            {/* <Inputs /> */}
            {/* <UncontrolledForm /> */}
            {/* <ControlledForm /> */}
            {/* <SplitForm /> */}
            <SignupForm createUser={this.createUser} />
            <div>
               <h3 className="text-center">All Registered Users:</h3>
               <ul className="list-group">
                  {this.state.users.map(user => (
                     <li key={user.id}>
                        {user.name} - {user.email}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      );
   }
}

export default App;
