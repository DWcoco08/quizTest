import CountDown from "./CountDown";

const RightContent = (props) => {
  const { dataQuiz } = props;
  console.log("check dataQuiz", dataQuiz);

  const onTimeUp = () => {
    props.handleFinish();
  };

  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div key={`q-${index}`} className="question">
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
