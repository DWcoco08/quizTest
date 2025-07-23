import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
import ModalViewQuiz from "./ModalViewQuiz";
import { useState } from "react";

const TableQuiz = ({ quizList, fetchQuiz }) => {
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalView, setIsShowModalView] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [dataView, setDataView] = useState({});

  const handleView = (quiz) => {
    setDataView(quiz);
    setIsShowModalView(true);
  };

  const resetDataView = () => {
    setDataView({});
  };

  const handleUpdate = (quiz) => {
    setDataUpdate(quiz);
    setIsShowModalUpdate(true);
  };

  const handleDelete = (quiz) => {
    setDataDelete(quiz);
    setIsShowModalDelete(true);
  };

  return (
    <>
      <div>List Quizzes: </div>
      <table className="table table-hover table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizList &&
            quizList.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "15px" }}>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalViewQuiz
        show={isShowModalView}
        setShow={setIsShowModalView}
        dataView={dataView}
        resetDataView={resetDataView}
      />
      <ModalUpdateQuiz
        show={isShowModalUpdate}
        setShow={setIsShowModalUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        fetchQuiz={fetchQuiz}
      />
      <ModalDeleteQuiz
        show={isShowModalDelete}
        setShow={setIsShowModalDelete}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
    </>
  );
};

export default TableQuiz;
