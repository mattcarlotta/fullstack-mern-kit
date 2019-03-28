module.exports = () => ({
  sendError: (err, res, done) => {
    res.status(500).json({ err: err.toString() });
    done();
  },
});
