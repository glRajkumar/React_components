const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28
}

const generateCalendar = (month, year) => {
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let first_day = new Date(year, month, 1)

  let days = []

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    if (i >= first_day.getDay()) {
      days.push(i - first_day.getDay() + 1)
    } else {
      days.push(0)
    }
  }

  return {
    year,
    month,
    monthName: months[month],
    days
  }
}

export {
  months,
  generateCalendar,
}