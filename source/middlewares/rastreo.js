export const rastreador = (req, res, next) => {
  const { method, url } = req;
  console.log(`Metodo: ${method}, url : ${url}`);
  next();
};
