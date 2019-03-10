module.exports = (app) => {
  const moment = app.get('moment');

  return {
    beginofMonth: () => moment().startOf('month'),
    convertDateToISO: date => moment(date)
      .utcOffset(-7)
      .toISOString(true),
    currentDate: () => moment()
      .utcOffset(-7)
      .toISOString(true),
    endofMonth: () => moment().endOf('month'),
    sendError: (err, res, done) => {
      res.status(500).json({ err: err.toString() });
      done();
    },
  };
};
