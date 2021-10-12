import React from "react";
import { useState } from "react/cjs/react.development";

const initialFormValues = {
    name: '',
    email: '',
    role: '',
}

const teamMembers = [
    {
    name: 'Jeff',
    email: 'haha@haha.com',
    role: 'Team Leader',   
}
]
export default function MemberForm(props){

    const [members, setMembers] = useState(teamMembers)
    const [formValues, setFormValues] = useState(initialFormValues)

    const change = (evt) => {
        const {name, value} = evt.target;
        setFormValues({ ...formValues, [name]: value });
      }

      const submit = (evt) => {
        evt.preventDefault();

        const newMember = {
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          role: formValues.role
        }
        setMembers(members.concat(newMember))
      }

return (
    <div>
    <form className='form-container' onSubmit={submit}>
      <div className='form-group inputs'> 
        <label>Name
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={change}
            maxLength="30"
            placeholder="full name please"
          />
        </label>

        <label>Email
          
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={change}
            placeholder="school email"
          />
        </label>

        <label>Role
          <select value={formValues.role} name="role" onChange={change}>
            <option value="">-- Select a role --</option>
            <option value="Student">Student</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Instructor">Instructor</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>

    {members.map(mem => {
       return (
        <div className='member-container'>
        <h2>{mem.name}</h2>
        <p>Email: {mem.email}</p>
        <p>Role: {mem.role}</p>
        </div>
       ) 
    })
    }
    </div>
)}