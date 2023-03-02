import Table from "react-bootstrap/Table";

const UserTable = (props) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Add-on Items</th>
        <th>order by</th>
        <th>Amount</th>
        <th>default select</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>Rs:{user.amount}</td>
            <td>
              <input type={"checkbox"} />
            </td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                <i class="bi bi-pencil-fill"></i>
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No Items</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default UserTable;
