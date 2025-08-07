import "./DashBoard.scss";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { getOverview } from "../../../services/apiService";
import { useState, useEffect } from "react";

const DashBoard = () => {
  const [dataOverview, setDataOverview] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetchDataOverview();
  }, []);

  const fetchDataOverview = async () => {
    let res = await getOverview();
    setDataOverview(res.DT);
    // process chart data
    let qz = 0,
      qs = 0,
      as = 0;
    qz = res?.DT?.others?.countQuiz ?? 0;
    qs = res?.DT?.others?.countQuestions ?? 0;
    as = res?.DT?.others?.countAnswers ?? 0;
    const data = [
      {
        name: "Quizzes",
        Qz: qz,
      },
      {
        name: "Questions",
        Qs: qs,
      },
      {
        name: "Answers",
        As: as,
      },
    ];
    setDataChart(data);
  };

  return (
    <div className="dashboard-container">
      <div className="title">Analysis DashBoard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">
            <span className="text-1">Total Users</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.users &&
              dataOverview.users.total ? (
                <>{dataOverview.users.total} </>
              ) : (
                <> 0 </>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Quizzes</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countQuiz ? (
                <>{dataOverview.others.countQuiz} </>
              ) : (
                <> 0 </>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Questions</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countQuestions ? (
                <>{dataOverview.others.countQuestions} </>
              ) : (
                <> 0 </>
              )}
            </span>
          </div>
          <div className="child">
            <span className="text-1">Total Answers</span>
            <span className="text-2">
              {dataOverview &&
              dataOverview.others &&
              dataOverview.others.countAnswers ? (
                <>{dataOverview.others.countAnswers} </>
              ) : (
                <> 0 </>
              )}
            </span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width={"95%"} height={"100%"}>
            <BarChart data={dataChart}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="Qz" fill="#d1f780ff" />
              <Bar dataKey="Qs" fill="#11813cff" />
              <Bar dataKey="As" fill="#1b0350ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
