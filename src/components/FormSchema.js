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
        .required(),
    terms: Yup
    .boolean( true , "Must Agree to Terms of Service" )
    .required()
})

export default FormSchema