import React from 'react';
import './App.css';
import SignupForm from './components/signup-form';
// import SplitForm from './components/split-form';
// import UncontrolledForm from './componets/forms/UncontrolledForm';
// import ControlledForm from './components/forms/ControlledForm';
// import Inputs from './components/Inputs/Inputs';

function App() {
   return (
      <div>
         <h1 className="mt-3 text-center">Practice Forms in React</h1>
         <hr />
         <br />
         {/* <Inputs /> */}
         {/* <UncontrolledForm /> */}
         {/* <ControlledForm /> */}
         {/* <SplitForm /> */}
         <SignupForm />
      </div>
   );
}

export default App;
