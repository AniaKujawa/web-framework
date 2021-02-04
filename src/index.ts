import { User } from './models/User';
import { UserList } from './views/UserList';

const collection = User.buildCollection();

collection.on('change', () => {
  const root = document.getElementById('root');

  if(root) {
    const userList = new UserList(
      collection,
      root
    )

    userList.render();
  } else {
    throw new Error(`${root} element not found!`);
  }
});
collection.fetch();
