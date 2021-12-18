import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import { months, generateCalendar } from './Heler';
import '../../css/calendar.css';

function Calendar({ onDayClick }) {
  const [monthName, setMonthName] = useState("")
  const [multiple, setMultiple] = useState(10)
  const [showTop, setShowTop] = useState("")
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
    setShowTop("")
  }

  const updateMonth = isNext => {
    let i = months.findIndex(m => m === monthName)
    let newMonth = isNext ? i + 1 : i - 1
    let newYear = year
    if (newMonth < 0) {
      newMonth = 11
      newYear = newYear - 1
    }
    if (newMonth > 11) {
      newMonth = 0
      newYear = newYear + 1
    }
    updateData(newMonth, newYear)
  }

  const updateYear = newYear => {
    updateData(month, newYear)
    setShowTop("")
  }

  const updateActive = (index, day) => {
    if (day !== 0) {
      onDayClick(new Date(year, month, day))
      setActive(index)
    }
  }

  const onMultiple = e => {
    if (e.target.value > 0 && e.target.value < 100) {
      setMultiple(e.target.value)
    }
  }

  return (
    <div className="calendar">
      <div className="df calendar-header">
        <Arrow className="rotateZ90 cp" onClick={() => updateMonth(false)} />
        <p className="month-picker cp" onClick={() => setShowTop("month")}>{monthName}</p>
        <Arrow className="rotateZ270 cp" onClick={() => updateMonth(true)} />

        <p className='m-auto'></p>

        <Arrow className="rotateZ90 cp" onClick={() => changeByYear(false)} />
        <p className="year-picker cp" onClick={() => setShowTop("year")}>{year}</p>
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

      <div className={`month-list ${showTop === "month" ? "show" : ""}`}>
        {
          months.map((m, i) => (
            <div
              key={m}
              className='dc cp'
              onClick={() => changeByMonth(i)}
            >
              {m}
            </div>
          ))
        }
      </div>

      <div className={`year-list ${showTop === "year" ? "show" : ""}`}>
        {
          months.map((m, i) => (
            <div
              key={m}
              className='dc cp year p-16'
              onClick={() => updateYear((i - 4) * multiple + year)}
            >
              {(i - 4) * multiple + year}
            </div>
          ))
        }

        <div className='df multiple'>
          <label htmlFor="multiple">Change year multiple </label>
          <input
            type="number"
            name="multiple"
            id="multiple"
            min={1}
            value={multiple}
            onChange={onMultiple}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar