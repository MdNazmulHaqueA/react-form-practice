import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Form = ({
   values,
   agreement,
   handleChange,
   handleAgreement,
   handleSubmit,
}) => (
   <form onSubmit={handleSubmit}>
      <TextInput
         name="name"
         label="Name"
         placeholder="Md Nazmul Haque"
         value={values.name}
         onChange={handleChange}
      />
      <TextInput
         name="email"
         type="email"
         label="Email"
         placeholder="test@gmail.com"
         value={values.email}
         onChange={handleChange}
      />
      <TextInput
         name="password"
         type="password"
         label="Password"
         placeholder="*******"
         value={values.password}
         onChange={handleChange}
      />
      <TextInput
         name="birthDate"
         type="date"
         label="Birth Date"
         value={values.birthDate}
         onChange={handleChange}
      />
      <div className="form-group">
         <label className="me-4">
            <input
               className="form-group me-2"
               name="gender"
               type="radio"
               value="Male"
               onChange={handleChange}
            />
            Male
         </label>
         <label className="me-4">
            <input
               className="form-group me-2"
               name="gender"
               type="radio"
               value="Female"
               onChange={handleChange}
            />
            Female
         </label>
         <label className="me-4">
            <input
               className="form-group me-2"
               name="gender"
               type="radio"
               value="Other"
               onChange={handleChange}
            />
            Other
         </label>
      </div>
      <div className="form-group">
         <label>
            <input
               className="form-group me-2"
               type="checkbox"
               name="agreement"
               checked={agreement}
               onChange={handleAgreement}
            />
            I agree
         </label>
      </div>
      <button type="submit" className="btn btn-success" disabled={!agreement}>
         Create User
      </button>
   </form>
);

Form.prototype = {
   values: PropTypes.object.isRequired,
   agreement: PropTypes.bool.isRequired,
   handleChange: PropTypes.func.isRequired,
   handleAgreement: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
};

export default Form;
