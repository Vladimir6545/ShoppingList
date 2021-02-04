import React from 'react'
import CurrentList from './Components/List'
import Context from './context'
import AddItem from './Components/AddItemToList'

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
    setMassive(massive.filter(item => item.id !== id))
  }

  function addItemList(title) {
    setMassive(massive.concat([
      {
        title,
        id: Date.now(),
        complete: false
      }
    ]))
  }

  return (
    <Context.Provider value={{ RemoveItemFromList }}>
      <div className='wrapper'>
        <h1>Shopping List</h1>
        <AddItem onCreate={ addItemList } />

        {massive.length ? <CurrentList massive={massive} onToggle={ToggleItem}/> : <h2>Empty shopping list</h2>}

      </div>
    </Context.Provider>
  )
}

export default App;
