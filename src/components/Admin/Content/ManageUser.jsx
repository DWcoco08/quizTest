import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllUser } from "../../../services/apiService";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import ModalViewUser from "./ModalViewUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [dataView, setDataView] = useState({});

  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

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

  const handleClickViewUser = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  };

  const resetDataView = () => {
    setDataView({});
  };

  const handleClickUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateDate = () => {
    setDataUpdate({});
  };

  const handleClickDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
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
            handleClickViewUser={handleClickViewUser}
            handleClickDeleteUser={handleClickDeleteUser}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchAllUser={fetchAllUser}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataView={dataView}
          resetDataView={resetDataView}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          fetchAllUser={fetchAllUser}
          dataUpdate={dataUpdate}
          resetUpdateDate={resetUpdateDate}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchAllUser={fetchAllUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
