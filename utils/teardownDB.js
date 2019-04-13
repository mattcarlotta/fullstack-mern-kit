const { TEARDOWN, WATCHING } = process.env;

const teardownDB = () => {
  if (TEARDOWN || !WATCHING) process.exit(0);
};

export default teardownDB;
