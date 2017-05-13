exports.myMiddleware = (req, res, next) => {
  req.name = 'cam';
  next();
}
