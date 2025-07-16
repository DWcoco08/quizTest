import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import User from "./components/User/User.jsx";
import Admin from "./components/Admin/Admin.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import ManageUser from "./components/Admin/Content/ManageUser.jsx";
import DashBoard from "./components/Admin/Content/Dashboard.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import ListQuiz from "./components/User/ListQuiz.jsx";
import DetailQuiz from "./components/User/DetailQuiz.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />

        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
