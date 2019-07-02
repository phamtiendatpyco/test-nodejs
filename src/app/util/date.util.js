import moment from 'moment';

exports.isOverTwoYearFromNow = (date) => moment().subtract(2, 'year').isAfter(date);
