import axios from 'axios';
import { User } from './models/User';

const user = User.build({ id: 2 });

user.on('change', () => {
  console.log(user);
});

user.fetch();