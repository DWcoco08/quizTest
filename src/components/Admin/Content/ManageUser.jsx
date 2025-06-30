import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="manage-user-title"></div>
      <div className="manage-user-content">
        <div>
          <button>Add new User</button>
        </div>
        <div>Table User</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
