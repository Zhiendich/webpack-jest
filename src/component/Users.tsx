import React from "react";
import { getUsers } from "../functions/getData";
import { IUser } from "../types/user";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <Link to={`${user.id}`} key={user.id} data-testid="user-name">
            {user.name}
          </Link>
        ))}
    </div>
  );
};

export default Users;
