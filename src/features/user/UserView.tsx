import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {fetchUsers} from './userSlice'

function UserView() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  return (
    <>
      <h1>Users list</h1>
      <div>
        {userData.loading && <p>Loading...</p>}
        {!userData.loading && userData.error && <p>{userData.error}</p>}
        {!userData.loading && userData.users &&
          userData.users.map((user) => <p key={`${user.id}`}>{user.name}</p>)}
      </div>
    </>
  );
}

export default UserView;
