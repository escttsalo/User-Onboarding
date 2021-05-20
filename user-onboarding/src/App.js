import './App.css';
import Form from './components/Form';
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

function App() {

  const [formValues, setFormValues] = useState(formValsInit);
  const [users, setUser] = useState(usersInit);
  const [formErrors, setFormErrors] = useState(formErrorsInit);  


  const inputChange = (name, value) => {
    setFormValues(
      {...formValues, [name]: value}
    )
  }
  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        // submit={formSubmit}
        errors={formErrors}
      />
    </div>
  );
};

export default App;
