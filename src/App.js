import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import './App.css';
import axios from 'axios'
import FormSchema from './components/FormSchema'
import * as Yup from 'yup'
import styled from 'styled-components'



const NewUser = styled.div`
  width:50%;
  margin: 1rem auto;
  height: 10rem;

  border: 0.2rem solid #8fc748;
    h4 {
      font-size: 1.5rem;
      color: #8fc748;
      padding-bottom:0;
    }
    &:hover {
      box-shadow: 0.2rem 0.2rem #8fc748;
    }
`


// Initial State
const freshForm = {
  name: "",
  email: "",
  password: "",
  terms: false
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: false
}

function App() {
  // State storing users
  const [users , setUsers] = useState([])
  // Form State
  const [formValues , setFormValues] = useState(freshForm)
  const [formErrors , setFormErrors] = useState(initialFormErrors)
  const [ disabled , setDisabled] = useState(true)

   // POST Request
 const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
  .then( res => {
    console.log(res.data)
    setUsers([...users , res.data])
    setFormValues(freshForm)
  })
  .catch( err => {
    console.log(err)
  })
 }
  
// OnChange
const change = (name , value) => {
  Yup.reach(FormSchema , name)
  .validate(value)
    .then( () => setFormErrors({...formErrors , [name]: ''}) )
    .catch( err => setFormErrors({...formErrors , [name]:err.errors[0] }))
  setFormValues({...formValues, [name]: value})
}

// OnSubmit
const submit = () => {
  const newUser = {
    name: formValues.name,
    email: formValues.email,
    terms: formValues.terms
  }
  postNewUser(newUser)
}
// Disable button
useEffect(() => {
  FormSchema.isValid(formValues)
  .then(isValid => setDisabled(!isValid))
  .catch( err => console.log(err) )
},[formValues])

  return (
    <div className="App">
     <Form
      values={formValues}
      change={change}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
     />
     <h2>New Members</h2>
     {users.map( user => {

       return (
         <NewUser>
           <h4>Name: {user.name}</h4>
           <p>Email: {user.email}</p>
         </NewUser>
       )
     } )}
    </div>
  );
}

export default App;
