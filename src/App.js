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
      const temp = localStorage.getItem('shoppingList')
      setMassive(JSON.parse(temp))
      HowManyCheckItems()
    }
  }

  function ClearLocalStorageWithCheckItems() {
    if (localStorage.getItem('shoppingList') !== null) {
      const temp = localStorage.getItem('shoppingList')
      let newList = JSON.parse(temp)
      newList = newList.filter(item => item.complete === false)
      setMassive(newList)
    }
  }

  function HowManyCheckItems() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    return checkboxes.length
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
        <h1 style={{ textAlign: 'center' }}>Shopping List</h1>
        <AddItem onCreate={ AddItemList } />
        <br/>
        <div style={{ overflow: 'hidden' }}>

          <p  style={{ float: 'left' }} style={{ paddingLeft: '3rem' }}> { HowManyCheckItems() } items selected
            <button disabled={!massive || !massive.some(item => item.complete === true) } className='btnDeleteCheckAll' onClick={() => ClearLocalStorageWithCheckItems() }>Delete selected</button>
            <button disabled={!massive || massive.length === 0} className='btnDeleteAll' onClick={() => ClearLocalStorage() }>Delete all</button>
          </p>
        </div>
        {
          massive !== null && massive.length ?
            <CurrentList massive={massive} onToggle={ToggleItem}/> :
            <h2>Empty shopping list</h2>
        }
      </div>
    </Context.Provider>
  )
}

export default App;
