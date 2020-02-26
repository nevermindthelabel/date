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
          <option value='1'>01</option>
          <option value='2'>02</option>
          <option value='3'>03</option>
          <option value='4'>04</option>
          <option value='5'>05</option>
          <option value='6'>06</option>
          <option value='7'>07</option>
          <option value='8'>08</option>
          <option value='9'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
        </select>
        <input type="text" defaultValue={sessionStorage.year || date.getFullYear()} onChange={handelYearChange} maxLength="4" />
        <h3>{targetDate.toLocaleDateString()} is {numDay} days from now</h3>
      </div>
    </div>
  );
}

export default App;
