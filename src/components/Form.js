import React from 'react'

const Form = () => {
    return (
        <form>
            {/* Name */}
            <label>
                Name
                <input 
                    name = "username"
                    type = "text"
                    placeholder = "enter username"
                />
            </label>
            {/* Email */}
            <label>
                Email
                <input 
                    name = "email"
                    type = "email"
                    placeholder = "enter email"
                />
            </label>
            {/* Password */}
            <label>
                Password
                <input 
                    name = "password"
                    type = "password"
                    placeholder = "enter password"
                />
            </label>
            {/* Terms of Service Checkbox */}
            <label>
                Terms of Service
                <input 
                    name = "terms"
                    type = "checkbox"
                    
                />
            </label>
            <button>Submit</button>
        </form>
    )
}


export default Form