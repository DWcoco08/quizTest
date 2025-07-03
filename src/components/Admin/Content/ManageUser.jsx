import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllUser } from "../../../services/apiService";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [listUser, setListUser] = useState([]);
  // componentDidMount
  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    let res = await getAllUser();
    if (res && res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const handleClickUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateDate = () => {
    setDataUpdate({});
  };

  return (
    <div className="manage-user-container">
      <div className="manage-user-title"> Manage User </div>
      <div className="manage-user-content">
        <div className="btn-add-user">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new User
          </button>
        </div>
        <div className="table-user-container">
          <TableUser
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchAllUser={fetchAllUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchAllUser={fetchAllUser}
          resetUpdateDate={resetUpdateDate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
