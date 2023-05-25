import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PageTemplate from "./common/PageTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageTemplate>
      <App />
    </PageTemplate>
  </React.StrictMode>
);

reportWebVitals();
