import React from 'react'

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
        <form onSubmit={onSubmit}>
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
                <div>{errors.name}</div>
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
                <div>{errors.email}</div>
            </label>
            {/* Password */}
            <label>
                Password
                <input 
                    name = "password"
                    type = "password"
                    value = {values.password}
                    onChange = {onChange}
                    placeholder = "enter password"
                />
                <div>{errors.password}</div>
            </label>
            {/* Terms of Service Checkbox */}
            <label>
                Terms of Service
                <input 
                    name = "terms"
                    type = "checkbox"
                    checked = {values.terms}
                    onChange = {onChange}
                />
                <div>{errors.terms}</div>
            </label>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}


export default Form