import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";

const DetailQuiz = () => {
  const params = useParams();
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

  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
