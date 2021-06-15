module.exports = rawRequest => {

  // return an OBJECT with a BODY, a METHOD, and a PATH
  const methodFromReq = rawRequest.split(' ')[0];

  const [, pathFromReq] = rawRequest.split('\n')[0].split(' ');

  return {  method: methodFromReq, path: pathFromReq };
};
