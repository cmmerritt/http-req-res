const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('GET request to / responds with plain text hi', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
});
