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
});
