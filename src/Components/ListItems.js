import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '.5rem',

  },
  input: {
    marginRight: '1rem',
    
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: '50%',
    color: '#FFA07A',
    border: 'none',
    fontWeight: 'bold'
  },
  done: {
    textDecoration: 'line-through',
  },
  notDone: {
    textDecoration: 'none'

  }

}

function Items({ list, index, onChange }) {
  let {RemoveItemFromList} = useContext(Context)
  let trigger = styles.notDone

  if (list.complete) {
    trigger = (styles.done)
  }

  return (
    <li style={styles.li}>

      <span style={trigger}>
        <label>
          <input
            style={styles.input}
            type="checkbox"
            checked={list.complete}
            onChange={() => onChange(list.id) }
            />
          <strong>{index + 1}</strong>
          &nbsp;
          {list.title}
        </label>
      </span>
      <button style={styles.button} onClick={() => RemoveItemFromList(list.id) }>&times; </button>
    </li>
  )
}

Items.propTypes = {
  list: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default Items