import request from 'supertest';
import app from '../../server/index';

describe('Person', () => {
  it('should insert a person', async () => {
    const response = await request(app)
      .post('/person')
      .send({
        cpf: '421.555.777-66',
        name: 'Abraham Lincoln',
        birthDate: '1992-10-10',
      });

    expect(response.status).toBe(201);
  });
});
