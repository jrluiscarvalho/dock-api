import * as PersonRepository from '../repositories/Person';

export async function getPerson(cpf) {
  const personExists = await PersonRepository.getPerson(cpf);
  return personExists;
}

export async function create(person) {
  const response = await PersonRepository.create(person);
  return response;
}
