import { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";
import Data from "./Data"

export default function App() {
  const totalItem = [
    { id: 1, name: "sprit 20 mi can", username: "3", amount: "15" },
    { id: 2, name: "pepsi 20 mi can", username: "1", amount: "15" },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [users, setUsers] = useState(totalItem);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "", amount: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      amount: user.amount,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div >
        <div >
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
        <div className="flex-large">
          {editing ? (
            <div>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
      </div>
      <Data/>
    </div>
    
  );
}
