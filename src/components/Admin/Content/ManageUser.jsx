import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="manage-user-title"></div>
      <div className="manage-user-content">
        <div>
          <button>Add new User</button>
        </div>
        <div>
          Table User
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
