import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hangman from "../game/Hangman";
import HomePage from "../home/HomePage";
import ModalContainer from "../common/modal/ModalContainer";

export interface IAppprops {}

const App: React.FunctionComponent<IAppprops> = (props) => {
  return (
    <Fragment>
      <ModalContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </Fragment>
  );
};

export default App;
