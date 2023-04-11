import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from './Button'
import Skeleton from "./Skeleton";

function useThunk(thunk){
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
    .unwrap()
    .catch((err) => setError(err))
    .finally(() => setIsLoading(true))
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error]
}

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    dispatch(addUser())
  }

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>error!!!</div>;
  }

  const renderedUsers = data.map((user) => {
    return <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
        </div>
    </div>
  })

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
          <h1 className="m-2 text-xl">Users</h1>
          <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
