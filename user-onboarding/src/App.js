import './App.css';
import Form from './components/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as yup from 'yup'
import schema from './validation/formSchema'

const formValsInit = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

const formErrorsInit = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

const usersInit = [];
const disabledInit = true;

function App() {
  // Initializing State
  const [formValues, setFormValues] = useState(formValsInit);
  const [users, setUsers] = useState(usersInit);
  const [formErrors, setFormErrors] = useState(formErrorsInit);  
  const [disabled, setDisabled] = useState(disabledInit);

  
  const getUsers = () => {
    axios.get('https:reqres.in/api/users')
    .then( res => {
      setUsers(res.data)
    })
    .catch( err => {
      console.log(err)
    })
  }

  const postNewUser = newUser => {
    axios.post('https:reqres.in/api/users', newUser)
    .then( res => {
      console.log(res)
      setUsers([res.data, ...users])
    })
    .catch( err => {
      console.log(err)
    })
    .finally(setFormValues(formValsInit))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then( () => setFormErrors({...setFormErrors, [name]: ''}))
      .catch( err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues(
      {...formValues, [name]: value}
    )
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }

    postNewUser(newUser)
  }

  useEffect( () => {
    getUsers()
  }, [])

  useEffect( () => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      
    </div>
  );
};

export default App;
