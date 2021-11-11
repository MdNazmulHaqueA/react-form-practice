import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Form = props => (
   <form onSubmit={props.handleSubmit}>
      <TextInput
         name="name"
         label="Name"
         placeholder="Md Nazmul Haque"
         value={props.values.name}
         onChange={props.handleChange}
      />
      <TextInput
         type="email"
         label="Email"
         name="email"
         placeholder="test@gmail.com"
         value={props.values.email}
         onChange={props.handleChange}
      />
      <TextInput
         type="password"
         label="Password"
         name="password"
         placeholder="*******"
         value={props.values.password}
         onChange={props.handleChange}
      />
      <button type="submit" className="btn btn-success">
         Submit
      </button>
   </form>
);

Form.prototype = {
   values: PropTypes.object.isRequired,
   handleChange: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
};

export default Form;
