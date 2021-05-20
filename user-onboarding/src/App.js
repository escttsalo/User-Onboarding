import './App.css';
import Form from './components/Form';
import axios from 'axios';
import { useState } from 'react';

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
      setUsers([res.data], ...users)
    })
    .catch( err => {
      console.log(err)
    })
    .finally(setFormValues(formValsInit))
  }

  const inputChange = (name, value) => {
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

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
    </div>
  );
};

export default App;
