import * as Yup from 'yup';

export function CreateValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.number().required(),
    value: Yup.number().required(),
  });

  return schema;
}

export function AllAccountValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.number().required(),
  });

  return schema;
}

export function TransactionByPeriodValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.number().required(),
    startDate: Yup.string().required(),
    endDate: Yup.string().required(),
  });

  return schema;
}
