import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    btn: {
       backgroundColor: '#FFA07A',
       borderRadius: '30px',
       padding: '1%',
       width: '36%',
       height: '65px',
       outline: 'none',
       marginLeft:'2%',
    },

    input: {
       	width: '55%',
        backgroundColor: '#F8F8F8',
        color: '$input-text-color',
        font: 'inherit',
        boxShadow: '0 6px 10px 0 rgba(0, 0, 0 , .1)',
        border: '1px',
        outline: '0',
        padding: '22px 18px',
        linearGradient:'(to right, RGB(110, 175, 233), RGB(110, 175, 233))',
        borderRadius: '30px',
        marginLeft:'2%'
    },
    div: {
        borderBottom: '2px solid #F8F8F8',
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
        <div style={styles.div}>
        <form onSubmit={submitHandler}>
            <input placeholder='Enter item' style={styles.input} value = {value} onChange={event => setValue(event.target.value) } />
            <button style={styles.btn} type='submit'>Add to shopping list</button>
        </form>
        <br/>
        </div>
    )
}

AddItemToList.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddItemToList