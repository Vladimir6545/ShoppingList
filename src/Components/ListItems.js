import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  },
  button: {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none'
  },
  done: {
    textDecoration: 'line-through'
  },
  notDone:{
      textDecoration: 'none'
  }

}

function Items({ list, index, onChange }) {
  let {RemoveItemFromList} = useContext(Context)
  let trigger = styles.notDone

 if (list.complete) {
    trigger = (styles.done)
  }
//console.log(trigger)
  return (
    <li style={styles.li}>
      <span style={trigger}>
        <input
          style={styles.input}
          type="checkbox"
          checked={list.complete}
          onChange={() => onChange(list.id) }
          />
        <strong>{index + 1}</strong>
        &nbsp;
        {list.title}
      </span>
      <button style={styles.button} onClick={() => RemoveItemFromList(list.id)}>&times; </button>
    </li>
  )
}

Items.propTypes = {
  list: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default Items