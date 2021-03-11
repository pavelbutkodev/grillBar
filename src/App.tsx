import React, { FC } from 'react';
import MainWindow from "./layout/MainWindow";
import {Header} from "./component/Shared/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <MainWindow />
    </>
  );
}

export default App;