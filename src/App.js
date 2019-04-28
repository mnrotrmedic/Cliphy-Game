import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        transition={Zoom}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
      />
      <GameContainer />
    </div>
  );
}

export default App;
