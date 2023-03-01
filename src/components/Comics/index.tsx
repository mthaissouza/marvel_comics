import React, { useEffect } from "react";
import api from "../../services/api";

const Comics = () => {
  useEffect(() => {
    api
      .get("/comics")
      .then((res) => console.log("RES: ", res.data.data))
      .catch((err) => console.log("ER: ", err));
  }, []);
  return <div className="App">Comics</div>;
};

export default Comics;
