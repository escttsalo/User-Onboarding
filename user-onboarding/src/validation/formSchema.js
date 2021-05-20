import * as yup from 'yup';

export default yup.object().shape({
    name:
        yup
        .string()
        .required('Name is required')
        .min(2, 'Name of user must be 2 characters long')
        .max(20, 'Name of user cannot be more than 20 characters long'),
    email: 
        yup
        .string()
        .required('Email is required')
        .email('Must be valid email address'),
    password:
        yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be longer than 6 characters')
        .max(20, 'Password cannot be more than 20 characters long'),
    tos:
        yup.boolean()
})