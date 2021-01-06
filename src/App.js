import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from'./components/Dropdown';
import Translate from './components/Translate';
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

const options = [
  {
    label:'The color red',
    value:'red'
  },
  {
    label:'The color blue',
    value:'blue'
  },
  {
    label:'The color green',
    value:'green'
  },
]



function App() {
  const [selected,setSelected] = useState(options[0]);
  const [showDropDown,setShowDropDown] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowDropDown(!showDropDown)}>Toogle Dropdown</button>
      {
        showDropDown ? 
        // <Dropdown 
        // onSelectedChange={setSelected}
        // selected={selected}
        // options={options}/>
        <Translate/>
        : null
        /* <Accordion items={items}/>
        <Search/> */
      }
    </div>
  );
}

export default App;
