const request = require('supertest');
const app = require('./exam').app
const url = 'http://localhost:3000'
const fetch = require('node-fetch');

// it('path /exams with GET', () => {
//     return fetch(url) 
//     .then(r => expect(r.status).toEqual(200))
// });


test('app module should be defined', () => {
  expect(app).toBeDefined();
});


/*
test('GET / should return 200', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});



test('Testing method=GET url=www.localhost expectedStatus=200', async () => {
    const response = await request(app)
      .post('/proxy')
      .send({
        url: 'https://www.localhost:3000',
        httpMethod: 'get',
        expectedResultStatus: 200
      })
      .set('Accept', 'application/json');
    expect(response.body.success).toBeDefined();
    expect(response.body.success).toBe(true);
  });
*/


