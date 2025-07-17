import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";

const DetailQuiz = () => {
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDesc,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDesc = item.questionDesc;
              image = item.image;
            }
            answers.push(item.answer);
          });
          return { questionId: key, answers, questionDesc, image };
        })
        .value();
      console.log("Processed Data:", data);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="q-title">
          Quiz {quizId}:{location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img src="" alt="" />
        </div>
        <div className="q-content">
          <div className="q-question">Question:</div>
          <div className="q-answer">
            <div className="a-child">A.</div>
            <div className="a-child">B.</div>
            <div className="a-child">C.</div>
            <div className="a-child">D.</div>
          </div>
        </div>
        <div className="q-footer">
          <button className="btn btn-secondary">Prev</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
      <div className="right-content">Count down</div>
    </div>
  );
};

export default DetailQuiz;
