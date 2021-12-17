import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import { months, generateCalendar } from './Heler';
import '../../css/calendar.css';

function Calendar() {
  const [showMonths, setShowMonths] = useState(false)
  const [monthName, setMonthName] = useState("")
  const [active, setActive] = useState(-1)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState("")
  const [days, setDays] = useState([])

  useEffect(() => {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()
    updateData(currentMonth, currentYear)
  }, [])

  const updateData = (newMonth, newYear) => {
    let data = generateCalendar(newMonth, newYear)
    setMonthName(data.monthName)
    setMonth(data.month)
    setDays([...data.days])
    setYear(data.year)
    setActive(-1)
  }

  const changeByYear = isNext => {
    let newYear = isNext ? year + 1 : year - 1
    updateData(month, newYear)
  }

  const changeByMonth = newMonth => {
    updateData(newMonth, year)
    setShowMonths(false)
  }

  const updateActive = (index, day) => {
    if (day !== 0) {
      console.log(new Date(year, month, day))
      setActive(index)
    }
  }

  return (
    <div className="calendar">
      <div className="df calendar-header">
        <p className="month-picker cp" onClick={() => setShowMonths(true)}>{monthName}</p>
        <Arrow className="rotateZ90 cp" onClick={() => changeByYear(false)} />
        <p>{year}</p>
        <Arrow className="rotateZ270 cp" onClick={() => changeByYear(true)} />
      </div>

      <div className="calendar-body">
        <div className="calendar-week-day">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-days">
          {
            days.map((day, i) => (
              <div
                key={i}
                className={`dc calendar-day cp ${day === 0 ? "no-hv" : ""} ${active === i ? "active" : ""}`}
                onClick={() => updateActive(i, day)}
              >
                {day > 0 ? day : ""}
              </div>
            ))
          }
        </div>
      </div>

      <div className={`month-list ${showMonths ? "show" : ""}`}>
        {
          months.map((m, i) => (
            <div className='dc cp' key={m} onClick={() => changeByMonth(i)}>
              {m}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Calendar