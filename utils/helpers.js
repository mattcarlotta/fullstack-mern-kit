const currentDirectory = process.cwd();
const sendError = (err, res) => res.status(400).json({ err: err.toString() });

export { currentDirectory, sendError };
