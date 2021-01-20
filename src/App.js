import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from'./components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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


  return (
    <div>
      <Header/>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
      <Route path='/list'>
        <Search/>
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options = {options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
}

export default App;
