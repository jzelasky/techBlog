const format = require('date-format');

module.exports = {
    format_date: (date) => {
      const newDate = format('MM/dd/yyyy', date)
      return newDate;
    }
}