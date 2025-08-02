import _ from "lodash";
import { useState } from "react";
import LightBox from "react-awesome-lightbox";

const Question = (props) => {
  const { data, index } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleHandleCheckBox = (event, aId, qId) => {
    props.handleCheckBox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64, ${data.image}`}
          />
          {isPreviewImage === true && (
            <LightBox
              image={`data:image/jpeg;base64, ${data.image}`}
              title={"Question Image"}
              onClose={() => setIsPreviewImage(false)}
            />
          )}
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="q-question">
        Question {index + 1}: {data.questionDesc}
      </div>
      <div className="q-answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((answer, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={answer.isSelected}
                    onChange={(event) =>
                      handleHandleCheckBox(event, answer.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">
                    {answer.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
