import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
    name: Yup
        .string()
        .required()
        .min(3 , "Name must be at least 3 characters"),
    email: Yup
        .string()
        .email()
        .required(),
    password: Yup
        .string()
        .required()
        .min(5 , "Must be at least 5 characters"),
    terms: Yup
    .boolean(true , "Must Agree to Terms of Service")
})

export default FormSchema