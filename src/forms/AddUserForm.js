import { useState } from "react";
import Table from "react-bootstrap/Table";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", amount: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
             
              <input
                type="text"
                onChange={handleInputChange}
                name="name"
                value={user.name}
                style={{ width: 56}}
              />
            </th>
            <th>
             
              <input
                type="text"
                onChange={handleInputChange}
                name="username"
                value={user.username}
                style={{ width: 58}}
              />
            </th>
            <th>
             
              <input
                type="text"
                onChange={handleInputChange}
                name="amount"
                value={user.amount}
                style={{ width: 32 }}
              />
            </th>
            <th>
            
              <input type={"checkbox"} style={{ width: 56}} />
            </th>
            <th>
              
              <button>
                <i class="bi bi-plus-circle-fill"></i>
              </button>
            </th>
          </tr>
        </thead>
      </Table>
    </form>
  );
};

export default AddUserForm;
