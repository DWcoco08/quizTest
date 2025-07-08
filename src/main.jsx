import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ReactDOM from "react-dom/client";
import "nprogress/nprogress.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
