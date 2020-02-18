import request from 'supertest';
import app from '../../server/index';
// import factory from '../factories/factory';
import Person from '../../server/app/models/Person';
import Account from '../../server/app/models/Account';
import Truncate from '../../server/utils/Truncate';

describe('Transaction', () => {
  let person;
  let account;

  beforeAll(async () => {
    await Truncate();

    person = await Person.create({
      name: 'Luis Carvalho',
      cpf: '123456789',
      birthDate: '1993-01-28',
    });

    account = await Account.create({
      idPerson: person.id,
      dailyLimit: 500,
      balance: 500,
      isActive: true,
      accountType: 1,
    });
  });

  it('should insert a transaction', async () => {
    const response = await request(app)
      .post('/transaction')
      .send({
        idAccount: account.id,
        value: 100,
      });

    expect(response.status).toBe(201);
  });

  it('should list a transaction by period', async () => {
    const date = new Date();
    const startDate = '2018-09-09';
    const endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const response = await request(app)
      .get(`/transaction/${account.id}/${startDate}/${endDate}`);

    expect(response.status).toBe(200);
  });

  it('should list a empty result in transaction by invalid period', async () => {
    const startDate = '2018-09-09';
    const endDate = '2018-10-09';
    const response = await request(app)
      .get(`/transaction/${account.id}/${startDate}/${endDate}`);

    expect(response.status).toBe(200);
    expect(JSON.stringify(response.body)).toBe('[]');
  });
});
