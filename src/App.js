import React from "react";
import Builder from "./components/builder";
import style from "./appstyle.module.css";
const App = () => {
  return (
    <div className={style.fullscreen}>
      <Builder />
    </div>
  );
};

export default App;
