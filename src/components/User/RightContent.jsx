const RightContent = (props) => {
  const { dataQuiz } = props;
  console.log("check dataQuiz", dataQuiz);

  return (
    <>
      <div className="main-timer">10:00</div>
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
