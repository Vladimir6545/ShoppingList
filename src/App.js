import React from 'react'
import CurrentList from './Components/List'
import Context from './context'
import AddItem from './Components/AddItemToList'

function App() {
  let [massive, setMassive] = React.useState([])

  React.useEffect(() => {
    const data = localStorage.getItem('shoppingList')
    if (data) {
      setMassive(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(massive))
  })

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

  function ClearLocalStorage() {
    if (localStorage.getItem('shoppingList') !== null) {
      localStorage.clear('shoppingList')
      const data12 = localStorage.getItem('shoppingList')
      setMassive(JSON.parse(data12))
    }
  }

  function AddItemList(title) {
    if (massive === null) {
      setMassive(massive = [])
    }
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
        <AddItem onCreate={ AddItemList } />
        {
          massive !== null && massive.length ?
            <CurrentList massive={massive} onToggle={ToggleItem}/> :
            <h2>Empty shopping list</h2>
        }
        {
          massive !== null
          && massive.length
          && <button  onClick={() => ClearLocalStorage() }>Delete all</button>
        }
      </div>
    </Context.Provider>
  )
}

export default App;
