import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import './App.css';
import axios from 'axios'
import FormSchema from './components/FormSchema'
import * as Yup from 'yup'

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
}

function App() {
  // State storing users
  const [users , setUsers] = useState([])
  // Form State
  const [formValues , setFormValues] = useState(freshForm)
  const [formErrors , setFormErrors] = useState(initialFormErrors)
  const [ disabled , setDisabled] = useState(true)

  // // GET Request
  // useEffect( () => {
  //   axios.get("https://reqres.in/api/users")
  // .then( res => {
  //   console.log(res.data.data)
  //   setUsers(res.data.data)
  // })
  // .catch( err => {
  //   console.log(err)
  // })
  // },[] )

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
         <div>
           <h4>Name: {user.name}</h4>
           <p>Email: {user.email}</p>
         </div>
       )
     } )}
    </div>
  );
}

export default App;
