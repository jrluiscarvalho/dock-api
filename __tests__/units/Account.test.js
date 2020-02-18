import request from 'supertest';
import app from '../../server/index';
// import factory from '../factories/factory';
import Person from '../../server/app/models/Person';
import Account from '../../server/app/models/Account';
import Truncate from '../../server/utils/Truncate';

describe('Account', () => {
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
      dailyLimit: 500.00,
      balance: 1000,
      isActive: true,
      accountType: 1,
    });
  });

  afterAll(async () => {
    await Truncate();
  });

  it('should insert a account', async () => {
    const response = await request(app)
      .post('/account')
      .send({
        idPerson: person.id,
        dailyLimit: 600.00,
        balance: 1500,
        isActive: true,
        accountType: 1,
      });

    expect(response.status).toBe(201);
  });

  it('should get account balance', async () => {
    const response = await request(app)
      .get(`/account/balance/${account.id}`).send();
    expect(response.status).toBe(200);
  });


  it('should change a account status', async () => {
    const response = await request(app)
      .put('/account/status')
      .send({
        idAccount: account.id,
        isActive: !account.isActive,
      });

    expect(response.status).toBe(204);
  });

  it('should not insert a account without idPerson', async () => {
    const response = await request(app)
      .post('/account')
      .send({
        dailyLimit: 400,
        balance: 400,
        isActive: true,
        accountType: 1,
      });
    expect(response.status).toBe(400);
  });


  it('should not draft a account blocked', async () => {
    const response = await request(app)
      .put('/account/draft')
      .send({
        idAccount: account.id,
        value: 320,
      });
    expect(response.status).toBe(401);
  });
});
