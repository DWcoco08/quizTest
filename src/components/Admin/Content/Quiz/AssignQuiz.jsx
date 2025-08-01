import { useState, useEffect } from "react";
import Select from "react-select";
import {
  getAllQuizForAdmin,
  getAllUser,
} from "../../../../services/apiService";

const AssignQuiz = (props) => {
  const [ListQuiz, setListQuiz] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const [ListUser, setListUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  // fetching data
  useEffect(() => {
    fetchQuiz();
    fetchUser();
  }, []);

  const fetchQuiz = async () => {
    const res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      let newQuiz = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.description}`,
        };
      });
      setListQuiz(newQuiz);
    }
  };

  const fetchUser = async () => {
    const res = await getAllUser();
    if (res && res.EC === 0) {
      let users = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.username} - ${item.email}`,
        };
      });
      setListUser(users);
    }
  };

  return (
    <div className="assign-quiz-container">
      <div className="col-6 form-group">
        <label className="mb-2">Select Quiz:</label>
        <Select
          defaultValue={selectedQuiz}
          onChange={setSelectedQuiz}
          options={ListQuiz}
          menuPortalTarget={document.body}
        />
      </div>

      <div className="col-6 form-group">
        <label className="mb-2">Select User:</label>
        <Select
          defaultValue={selectedUser}
          onChange={setSelectedUser}
          options={ListUser}
          menuPortalTarget={document.body}
        />
      </div>

      <div>
        <button className="btn btn-warning mt-3">Assign</button>
      </div>
    </div>
  );
};

export default AssignQuiz;
