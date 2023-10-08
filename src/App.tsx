import React from 'react';
import MuiTypography from './Components/MuiTypography';

import './App.css';
import MuiRadioButton from './Components/MuiRadioButton';
import MuiCheckbox from './Components/MuiCheckbox';
import MuiSwitch from './Components/MuiSwitch';
// import YoutubeForm from './Components/YoutubeForm';
// import Greet from './Components/Greet'
// import Person from './Components/Person'
// import PersonList from './Components/PersonList';
// import YupYoutube from './Components/YupYoutube';
// import ZodYoutubeForm from './Components/ZodYoutubeForm'
// import MuiLoginForm from './Components/MuiLoginForm';
// import ButtonMui from './Components/ButtonMui';
// import MuiTextField from './Components/MuiTextField';
// import MuiSelect from './Components/MuiSelect';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }
  // const nameList = [
  //   {
  //     first:'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first:'Wonder',
  //     last: 'Woman'
  //   },
  //   {
  //     first:'Spider',
  //     last: 'Man'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name="Sotonyejoe" messageCount={20} isLoggedIn={false}/>
      <Person  name={personName}/> 
      <PersonList names={nameList}/> */}
      <div className="materialUi">
      {/* <YoutubeForm /> */}
      {/* <YupYoutube /> */}
      {/* <ZodYoutubeForm /> */}
      {/* <MuiLoginForm /> */}
      {/* <MuiTypography /> */}
      {/* <ButtonMui /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      <MuiSwitch />

      </div>
    </div>
  );
}

export default App;
