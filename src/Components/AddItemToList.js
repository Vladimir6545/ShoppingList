import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddItemToList(props) {
    const [value, setValue] = useState('')

function submitHandler(event) {
    event.preventDefault()

    if(value.trim()){
        props.onCreate(value)
        setValue('')
    }
}
    return (
        <form onSubmit={submitHandler}>
            <input value = {value} onChange={event => setValue(event.target.value)} />
            <button type='submit'>ADD Item</button>
        </form>
    )
}

AddItemToList.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddItemToList