import PersonValidator from '../../validators/Person';
import errorHandler from '../../errors/ErrorHandler';

import * as PersonService from '../../services/Person';

export default async function store(req, res) {
  try {
    const schema = PersonValidator();

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const personExists = await PersonService.getPerson(req.body.cpf);

    if (personExists) {
      return res.status(400).json({ error: 'Person already exists' });
    }

    const response = await PersonService.create(req.body);

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
}
