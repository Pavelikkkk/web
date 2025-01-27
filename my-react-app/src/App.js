import React, {useState} from 'react';
import './styles/App.css'
import TextList from './components/TextList';
import Table from './components/Table';

function App() {

  const [postsFirst] = useState([
    {id: 1 , description:'ca',},
    {id: 2 , description:'cd',},
    {id: 3 , description:'cr',},

  ])

  const [postsSecond] = useState([
    {id: 1 , description:'ca',},
    {id: 2 , description:'cd',},
    {id: 3 , description:'cr',},

  ])

  return ( 
    <div> 
      
      <Table firstVersion={<TextList posts={postsFirst} title={"First"}/>} />
    </div>
    
  );
}
export default App;
