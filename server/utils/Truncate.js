import Person from '../app/models/Person';
import Account from '../app/models/Account';
import Transaction from '../app/models/Transaction';


export default function Truncate() {
  Person.destroy({
    truncate: true,
    force: true,
    cascade: true,
  });

  Account.destroy({
    truncate: true,
    force: true,
    cascade: true,
  });

  Transaction.destroy({
    truncate: true,
    force: true,
    cascade: true,
  });
}
