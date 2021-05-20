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

const dataInit = [];

function App() {

  const [formValues, setFormValues] = useState(formValsInit);
  const [data, setdata] = useState(dataInit);
  const [formErrors, setFormErrors] = useState(formErrorsInit);  

  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
