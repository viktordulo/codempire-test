import React from 'react';
import './App.css';
import ButtonsArea from './components/Buttons/ButtonsArea/ButtonsArea';
import InputField from './components/InputField/InputField';
import SlideBar from './components/SlideBar/SlideBar';

const App: React.FC = () => {

  return (
    <div className="App">
      <SlideBar />
      <InputField />
      <ButtonsArea />
    </div>
  );
}

export default App;
