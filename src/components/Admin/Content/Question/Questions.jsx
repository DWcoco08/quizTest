import { useState } from "react";
import Select from "react-select";
import "./Question.scss";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="questions-container">
      <div className="questions-title">Manage Questions</div>
      <hr />
      <div className="add-new-questions">
        <div className="col-6 form-group">
          <label>Select Quiz:</label>
          <Select
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add Questions:</div>
        <div>
          <div className="questions-content">
            <div className="form-floating description">
              <input
                type="type"
                className="form-control"
                placeholder="Question Description"
              />
              <label>Question Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type="file" hidden />
              <span>0 file is uploaded</span>
            </div>
            <div className="btn-add">
              <span>
                <BsFillPatchPlusFill className="icon-add" />
              </span>
              <span>
                <BsPatchMinusFill className="icon-remove" />
              </span>
            </div>
          </div>
          <div className="answers-content">
            <input type="checkbox" className="form-check-input iscorrect" />
            <div className="form-floating-answer-name">
              <input
                type="type"
                className="form-control"
                placeholder="Question Answer"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-group">
              <span>
                <AiFillPlusSquare className="icon-add" />
              </span>
              <span>
                <AiOutlineMinusCircle className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
