import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.js";
import SocketProvider from "./context/SocketProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SocketProvider>
      <PersistGate persistor={persistor} loading={null}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000} // 3 sec
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </PersistGate>
    </SocketProvider>
  </Provider>
);
