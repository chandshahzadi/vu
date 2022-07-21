import { useState } from "react";
import axios from "axios";
// const teachers_URL = "http://localhost:3001";
const Form = (props: any) => {
const [name, setName] = useState('');
  const [city, setCity] = useState('');
  
  const changeName = (event: any) => {
    setName(event.target.value);
  };
  
  const changeCity = (event: any) => {
    setCity(event.target.value);
  };
  
  const transferValue = (event: any) => {
    event.preventDefault();
    const val = {
      name,
      city,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setCity('');
  };
  
  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <label>City</label>
      <input type="text" value={city} onChange={changeCity} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}
export default Form;