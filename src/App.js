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

  let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let feb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  let febLeapYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  let otherDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const today = new Date().toLocaleDateString();

  const firstDay = new Date();

  const targetDate = new Date(`${month} ${day} ${year}`);

  const difference = targetDate - firstDay;

  const calc = 1000 * 60 * 60 * 24;

  const numDay = Math.floor(difference / calc);

  return (
    <div className="wrapper">
      <div className="App">
        <p>Photo by <a href="https://unsplash.com/@acarrillo46"> Alan Carrillo</a> on <a href="https://unsplash.com/">Unsplash</a>.</p>
        <p>Today is {today}</p>
        <select onChange={handelChange} defaultValue={sessionStorage.month || date.toLocaleString('default', { month: 'long' })}>
          {months.map((thisMonth, index) => <option value={thisMonth} key={index}>{thisMonth}</option> )}
        </select>

        <select onChange={handleDayChange} defaultValue={sessionStorage.day || date.getDate()}>
          {month === 'February' && year % 4 == 0 ? febLeapYear.map((day, index) => <option value={day} key={index}>{day}</option>) : feb.map((day, index) => <option value={day} key={index}>{day}</option>) || month === 'January || March || May || July || August || October || December' ? days.map((day, index) => <option value={day} key={index}>{day}</option>) : otherDays.map((day, index) => <option value={day} key={index}>{day}</option>)}

        </select>
        <input type="text" defaultValue={sessionStorage.year || date.getFullYear()} onChange={handelYearChange} maxLength="4" />
        {!sessionStorage.month && !sessionStorage.day && !sessionStorage.year ? '' : <h3>{targetDate.toLocaleDateString()} is {numDay + 1} days from now</h3>}
      </div>
    </div>
  );
}

export default App;
