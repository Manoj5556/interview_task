import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
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
                style={{ width: 126}}
              />
            </th>
            <th>
             
              <input
                type="text"
                onChange={handleInputChange}
                name="username"
                value={user.username}
                style={{ width: 125 }}
              />
            </th>
            <th>
             
              <input
                type="text"
                onChange={handleInputChange}
                name="amount"
                value={user.amount}
                style={{ width: 77}}
              />
            </th>
            <th>
              {" "}
              <input type={"checkbox"} style={{ width: 123}} />
            </th>
            <th>
              {" "}
              <button>
                <i class="bi bi-file-earmark-arrow-up-fill"></i>
              </button>
            </th>
            <th>
              {" "}
              <button
                className="button muted-button"
                onClick={() => {
                  props.setEditing(false);
                }}
              >
                <i class="bi bi-x-circle-fill"></i>
              </button>
            </th>
          </tr>
        </thead>
      </Table>
    </form>
  );
};

export default EditUserForm;
