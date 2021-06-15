module.exports = rawRequest => {

  // return an OBJECT with a BODY, a METHOD, and a PATH

  const methodFromReq = rawRequest.split(' ')[0];

  const [, pathFromReq] = rawRequest.split('\n')[0].split(' ');

  if(methodFromReq === 'GET') {
    return {  method: methodFromReq, path: pathFromReq };
  }

  else {
    const [, , , , objectFromReq] = rawRequest.split('\n');
    return {  method: methodFromReq, path: pathFromReq, body: objectFromReq };
  }
};
