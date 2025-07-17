import { useState, useEffect } from "react";
import { getQuizByUser } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import "./ListQuiz.scss";

const ListQuiz = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    const res = await getQuizByUser();
    console.log("API response:", res);
    if (res && res.EC === 0) {
      setQuizzes(res.DT);
    }
  };
  return (
    <div className="list-quiz-container container">
      {quizzes &&
        quizzes.length > 0 &&
        quizzes.map((quiz, index) => {
          return (
            <div
              key={`${index}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/jpeg;base64, ${quiz.image}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quizTitle: quiz.description },
                    })
                  }
                >
                  Start Now
                </button>
              </div>
            </div>
          );
        })}
      {quizzes && quizzes.length === 0 && (
        <div className="no-quiz-message">
          No quizzes available. Please check back later!
        </div>
      )}
    </div>
  );
};

export default ListQuiz;
