import React from 'react'
import styled from 'styled-components'

const FormData = styled.form`
width: 50%;
margin: 5rem auto;
display: flex;
flex-direction:column;
align-items: center;
font-size:1.2rem;
    label{
        color: #8fc748;
        padding-right: 0.1rem;
        display:flex;
        width: 50%;
        height:2rem;
        justify-content: space-between;
        margin-bottom: 1rem;
        
    }

    input{
        border:0.1rem solid #8fc748;
        padding-left: 1rem;
    }
    .check{
        margin:auto;
    }
    button{
        width:100%;
        height:2rem;
        font-size:1.2rem;
        background-color: #8fc748;
        color:white;
        border:none;
    }
`


const Form = (props) => {
    const { values , submit , change , disabled , errors } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const { name , value , type , checked } = e.target
        const isChecked = type === "checkbox" ? checked : value
        change(name , isChecked)
    }
    return (
        <FormData onSubmit={onSubmit}>
            {/* Name */}
            <label>
                Name
                <input 
                    name = "name"
                    type = "text"
                    value = {values.name}
                    onChange = {onChange}
                    placeholder = "enter name"
                />
                
            </label>
            {/* Email */}
            <label>
                Email
                <input 
                    name = "email"
                    type = "email"
                    value = {values.email}
                    onChange = {onChange}
                    placeholder = "enter email"
                />
               
            </label>
            {/* Password */}
            <label>
            Password:   
                <input 
                    name = "password"
                    type = "password"
                    value = {values.password}
                    onChange = {onChange}
                    placeholder = "enter password"
                />
                
            </label>
            {/* Terms of Service Checkbox */}
            <label >
                Terms of Service
                <input
                    className="check"
                    name = "terms"
                    type = "checkbox"
                    checked = {values.terms}
                    onChange = {onChange}
                />
                
            </label>
            <button disabled={disabled}>Submit</button>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </FormData>
    )
}


export default Form