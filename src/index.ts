import { UserEdit} from './views/UserEdit';
import { User } from './models/User';

const user = User.build({ name: 'Asz', age: 20 });
const root = document.getElementById('root');

if(root) {
  const userEdit = new UserEdit(
    root,
    user
  );
  
  userEdit.render();
} else {
  throw new Error(`${root} element not found!`);
}