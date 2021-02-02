import React from 'react'
import CurrentList from './Components/List'

function App() {
  const [massive, setMassive] = React.useState([
    { id: 1, complete: false, title: 'buy milk' },
    { id: 2, complete: true, title: 'buy bred' },
    { id: 3, complete: false, title: 'buy soap' }
  ])

  function ToggleItem(id) {
    setMassive(
      massive.map(items => {
        if (items.id === id) {
          items.complete = !items.complete
        }
        return items
      })
    )
  }

  return (<div className='wrapper'>
    <h1>Shopping List</h1>

    <CurrentList massive={massive} onToggle={ToggleItem}/>

  </div>)
}

export default App;
