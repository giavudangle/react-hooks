import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title:'What is react ?' ,
    content:'React is a front end js library for building user interface'
  },
  {
    title:'What is react core ?' ,
    content:'React is a front end js library for building user interface'
  },
  {
    title:'What is react test ?' ,
    content:'React is a front end js library for building user interface'
  },
  {
    title:'What is react term ?' ,
    content:'React is a front end js library for building user interface'
  }
]



function App() {
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      <Search/>
    </div>
  );
}

export default App;
