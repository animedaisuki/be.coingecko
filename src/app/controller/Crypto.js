const status = require("http-status");

exports.fetch = async (req, res) => {
  try {
    return res.status(status.OK).json({ message: "OK" });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};
