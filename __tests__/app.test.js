const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('GET request to / responds with plain text hi', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
  it('POST request to /echo responds with status code 200 and plain text with request body', async() => {
    const res = await request(app).post('/echo').send('oh hai Mark');
    expect(res.text).toEqual('oh hai Mark');
    expect(res.status).toEqual(200);
  });
  it('GET request to /red responds with html with h1 and word red', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });
  it('GET request to /green responds with html with h1 and word green', async() => {
    const res = await request(app).get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });
  it('GET request to /blue responds with html with h1 and word blue', async() => {
    const res = await request(app).get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
