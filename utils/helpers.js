/* eslint-disable */
const sendError = (err, res, done) => {
  return res.status(400).json({ err: err.toString() });
  done();
};

export { sendError };
/* eslint-enable */
