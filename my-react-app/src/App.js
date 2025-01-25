import React, {useState} from 'react';
import './styles/App.css'
import TextList from './components/TextList';

function App() {

  const [posts,SetContent] = useState([
    {id: 1 , description:'ca',},
    {id: 2 , description:'cd',},
    {id: 3 , description:'cr',},

  ])

  return ( 
    <div> 
      <TextList posts={posts} title="text"/>
    </div>
    
  );
}
export default App;
