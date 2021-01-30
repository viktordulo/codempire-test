import React from 'react';
import './App.css';
import ButtonsArea from './components/ButtonsArea';
import InputField from './components/InputField';
import SlideBar from './components/SlideBar';

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
