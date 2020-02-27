import React, { useState } from 'react';
import dayjs from 'dayjs';
import './App.css';

function App() {

  const date = new Date();

  const [month, setMonth] = useState(date.toLocaleString('default', { month: 'long' }).toString());
  const [day, setDay] = useState(date.getDate())
  const [year, setYear] = useState(date.getFullYear())

  const handelChange = e => {
    setMonth(e.target.value);
    sessionStorage.setItem('month', e.target.value);
  }

  const handleDayChange = e => {
    setDay(e.target.value);
    sessionStorage.setItem('day', e.target.value);
  }

  const handelYearChange = e => {
    setYear(e.target.value);
    sessionStorage.setItem('year', e.target.value);
  }

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const today = new Date().toLocaleDateString();

  // const targetDate = new Date('April 29, 2020')

  const firstDay = new Date();

  const targetDate = new Date(`${month} ${day} ${year}`);

  const difference = targetDate - firstDay;

  const calc = 1000 * 60 * 60 * 24;

  const numDay = Math.floor(difference / calc);

  console.log(`It is ${numDay} days to ${targetDate}`)

  return (
    <div className="wrapper">
      <div className="App">
        <p>Photo by <a href="https://unsplash.com/@acarrillo46"> Alan Carrillo</a> on <a href="https://unsplash.com/">Unsplash</a>.</p>
        <p>Today is {today}</p>
        <select onChange={handelChange} defaultValue={sessionStorage.month || date.toLocaleString('default', { month: 'long' })}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select onChange={handleDayChange} defaultValue={sessionStorage.day || date.getDate()}>
          {days.map(day => <option value={day}>{day}</option>)}
         </select>
        <input type="text" defaultValue={sessionStorage.year || date.getFullYear()} onChange={handelYearChange} maxLength="4" />
        <h3>{targetDate.toLocaleDateString()} is {numDay} days from now</h3>
      </div>
    </div>
  );
}

export default App;
