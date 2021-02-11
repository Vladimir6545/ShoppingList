import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    btn: {
       background: '-webkit-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%)'
    },

    input: {
       	width: '360px',
        background: '#fff',
        color: '$input-text-color',
        font: 'inherit',
        boxShadow: '0 6px 10px 0 rgba(0, 0, 0 , .1)',
        border: '1px',
        outline: '0',
        padding: '22px 18px',
        linearGradient:'(to right, RGB(110, 175, 233), RGB(110, 175, 233))'
    }
}

function AddItemToList(props) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            props.onCreate(value)
            setValue('')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input placeholder='Text' style={styles.input} value = {value} onChange={event => setValue(event.target.value) } />
            <button className='btnDeleteAll' type='submit'>ADD To Shopping list</button>

        </form>
    )
}

AddItemToList.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddItemToList