import Person from '../models/Person';

export async function getPerson(cpf) {
  const personExists = await Person.findOne({ where: { cpf } });
  return personExists;
}

export async function create(person) {
  const { id, name, cpf } = await Person.create(person);
  return { id, name, cpf };
}
