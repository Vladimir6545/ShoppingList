import React from 'react'
import PropTypes from 'prop-types'
import Items from './ListItems'


const styles = {
    ul: {
        listStyle: 'none',
        marging: 0,
        padding: 0
    }
}

function CurrentList(props) {
    return (
        <ul style = {styles.ul}>
            { props.massive.map((list, index) => {
                return <Items list={list} key={list.id} index={index}/>
            })
            }
        </ul>
    )
}

CurrentList.propTypes = {
  massive: PropTypes.arrayOf(PropTypes.object).isRequired  
}
export default CurrentList