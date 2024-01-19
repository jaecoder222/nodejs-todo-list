export default (error, req, res, next) => {
  console.error(error);
  if (error.name === "ValidationError") {
    return res.status(400).json({ errorMessage: error.message });
  }
  return res
    .status(500)
    .json({ errorMessage: "서버에서 에러가 발생했습니다." });
};
