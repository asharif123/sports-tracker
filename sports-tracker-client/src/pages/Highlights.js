import React from "react";
import MediaGrid from "../components/MediaGrid";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CountContext } from "../ContextProvider";
function Highlights() {
  const { state } = useContext(CountContext);

  return (
    <div>
      <>{!state.loggedIn ? <Navigate replace to="/login" /> : <MediaGrid />}</>
    </div>
  );
}

export default Highlights;
