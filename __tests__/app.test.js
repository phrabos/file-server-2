const request = require('supertest');
const app = require('../lib/app');
const fs = require('fs').promises

describe('app routes', () => {
  it('should send html body', async () => {
    const res = await request(app)
      .get('/index.html')
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Server-Side Rendering</title>
</head>
<body>
  <h1 id='header'>You are seeing this because the server successfully sent the .html file in its response</h1>
</body>
</html>`);
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