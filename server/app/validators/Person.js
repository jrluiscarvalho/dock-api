import * as Yup from 'yup';

export default function PersonValidator() {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    cpf: Yup.string().required(),
    birthDate: Yup.date().required(),
  });

  return schema;
}
