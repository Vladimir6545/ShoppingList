import React from 'react'
import CurrentList from './Components/List'
import Context from './context'

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

function RemoveItemFromList(id) {
  setMassive(massive.filter(item => item.id !== id) )
}

  return (
    <Context.Provider value={{RemoveItemFromList}}>
      <div className='wrapper'>
        <h1>Shopping List</h1>

        <CurrentList massive={massive} onToggle={ToggleItem}/>

      </div>
    </Context.Provider>
  )
}

export default App;
