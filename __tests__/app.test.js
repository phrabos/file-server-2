const request = require('supertest');
const app = require('../lib/app');
const fs = require('fs').promises

describe('app routes', () => {
  it('should send html body', async () => {
    const res = await request(app)
      .get('/index.html')
   
    expect(res.text).toEqual('<body><h1>hi</h1></body>');
  })

  it('should return Not Valid Endpoint', async () => {
    const res = await request(app)
      .get('/index.html/endpoint')
    expect(res.text).toEqual('Not Valid Endpoint');
  })

  it('should send File not found', async () => {
    const res = await request(app)
      .get('/home.html')
    expect(res.text).toEqual('File Not Found');
  })

})