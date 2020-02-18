
export default async function errorHandler(err, res) {
  if (Array.isArray(err.message)) {
    const messageArray = [];
    err.message.forEach((msg) => messageArray.push(msg.message));
    return res.status(401).send(messageArray);
  }
  switch (err.message) {
    case 'account-is-blocked':
      return res.status(401).send({ message: 'Account is blocked' });
    case 'account-not-found':
      return res.status(404).send({ message: 'Account not found' });
    case 'value-not-available':
      return res.status(401).send({ message: 'Value not available' });
    case 'operation-not-available':
      return res.status(401).send({ message: 'Operation not available' });
    default:
      res.status(500).json({ message: 'Internal server error' });
  }

  return '';
}
