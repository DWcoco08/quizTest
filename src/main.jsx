import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "./utils/i18n.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-awesome-lightbox/build/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
