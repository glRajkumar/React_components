import React from 'react';
import Calendar from './Calendar';

function CalContainer() {
  return (
    <div className='p-16'>
      <h1>Calendar</h1>

      <Calendar
        onDayClick={date => console.log(date)}
      />
    </div>
  )
}

export default CalContainer