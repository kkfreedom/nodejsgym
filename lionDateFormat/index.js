const format = require('date-format')


function dateFormat(date) {
  let formatDT = format('yyyy-MM-dd hh:mm:ss', date)
  return formatDT
}

module.exports = {
  dateFormat
}
