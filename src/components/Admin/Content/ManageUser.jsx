import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllUser, getUserWithPaginate } from "../../../services/apiService";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import TableUserPaginate from "./TableUserPaginate";
import ModalCreateUser from "./ModalCreateUser";
import ModalViewUser from "./ModalViewUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
  const LimitUser = 1;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
    fetchAllUserWithPaginate(1);
    // fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    let res = await getAllUser();
    if (res && res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const fetchAllUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LimitUser);
    if (res && res.EC === 0) {
      setListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
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
          {/* <TableUser
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDeleteUser={handleClickDeleteUser}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDeleteUser={handleClickDeleteUser}
            fetchAllUserWithPaginate={fetchAllUserWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchAllUser={fetchAllUser}
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchAllUser={fetchAllUser}
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
