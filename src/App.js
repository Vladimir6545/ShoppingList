import React from 'react'
import CurrentList from './Components/List'

function App() {
  const massive = [
    {id: 1, complete: false, title: 'buy milk'},
    {id: 2, complete: false, title: 'buy bred'},
    {id: 3, complete: false, title: 'buy soap'}
  ]


  return (<div className='wrapper'>
  <h1>Shopping List</h1>
    
    <CurrentList massive={massive}/>
 
   </div>)
}

export default App;
