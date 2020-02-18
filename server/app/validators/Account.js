import * as Yup from 'yup';

export function AccountValidator() {
  const schema = Yup.object().shape({
    idPerson: Yup.number().required(),
    dailyLimit: Yup.number().required(),
    balance: Yup.number().required(),
    isActive: Yup.boolean().required(),
    accountType: Yup.number().required(),
  });

  return schema;
}


export function updateBalanceValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.number().required(),
    value: Yup.number().required(),
  });

  return schema;
}

export function BalanceValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.string().required(),
  });

  return schema;
}

export function ActiveValidator() {
  const schema = Yup.object().shape({
    idAccount: Yup.number().required(),
    isActive: Yup.boolean().required(),
  });

  return schema;
}
