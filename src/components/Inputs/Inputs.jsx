import React, { Component } from 'react';

class Inputs extends Component {
   state = {
      name: '',
      country: '',
      bio: '',
      birthday: '',
      gender: '',
      agree: false,
      skills: [],
   };

   handleChange = event => {
      // const target = event.target;
      const value =
         event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value;

      this.setState({
         [event.target.name]: value,
      });
   };

   // handleCheckBox = event => {
   //    this.setState({
   //       agree: event.target.checked,
   //    });
   // };

   handleSkillChange = event => {
      if (event.target.checked) {
         this.setState({
            skills: [...this.state.skills, event.target.value],
         });
      } else {
         const skills = this.state.skills.filter(
            skill => skill !== event.target.value
         );
         this.setState({
            skills,
         });
      }
   };

   render() {
      const { name, country, bio, birthday, agree, skills } = this.state;
      return (
         <div className="container">
            <input
               className="form-control my-2"
               type="text"
               name="name"
               placeholder="Your Name"
               value={name}
               onChange={this.handleChange}
            />
            <select
               className="form-control my-2"
               name="country"
               value={country}
               onChange={this.handleChange}
            >
               <option>Select Country</option>
               <option value="Bangladesh">Bangladesh</option>
               <option value="India">India</option>
               <option value="Sri Lanka">Sri Lanka</option>
               <option value="Pakistan">Pakistan</option>
               <option value="China">China</option>
            </select>
            <textarea
               className="form-control my-2"
               name="bio"
               placeholder="Tell me about yourself"
               cols="30"
               rows="10"
               value={bio}
               onChange={this.handleChange}
            ></textarea>
            <input
               className="form-control my-2"
               type="date"
               name="birthday"
               value={birthday}
               onChange={this.handleChange}
            />
            <div>
               <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleChange}
               />
               Male
               <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={this.handleChange}
               />
               Female
               <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={this.handleChange}
               />
               Other
            </div>
            {/* <div>
               <input
                  type="checkbox"
                  name="agree"
                  checked={agree}
                  onChange={this.handleCheckBox}
               />
               I agree to all the terms and conditions
            </div> */}

            <div>
               Skills:
               <br />
               <input
                  type="checkbox"
                  name="skills"
                  value="Java"
                  checked={skills.includes('Java')}
                  onChange={this.handleSkillChange}
               />{' '}
               Java
               <input
                  type="checkbox"
                  name="skills"
                  value="Javascript"
                  checked={skills.includes('Javascript')}
                  onChange={this.handleSkillChange}
               />{' '}
               Javascript
               <input
                  type="checkbox"
                  name="skills"
                  value="Python"
                  checked={skills.includes('Python')}
                  onChange={this.handleSkillChange}
               />{' '}
               Python
               <input
                  type="checkbox"
                  name="skills"
                  value="GoLang"
                  checked={skills.includes('GoLang')}
                  onChange={this.handleSkillChange}
               />{' '}
               GoLang
            </div>

            <div>
               <input
                  type="checkbox"
                  name="agree"
                  checked={agree}
                  onChange={this.handleChange}
               />
               I agree to all the terms and conditions without using extra
               handler
            </div>

            <button
               onClick={() => console.log(this.state)}
               className="d-block btn btn-info"
            >
               Show Data
            </button>
         </div>
      );
   }
}

export default Inputs;
