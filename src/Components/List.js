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
                return (
                    <Items
                        list={list}
                        key={list.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                )
            })
            }
        </ul>
    )
}

CurrentList.propTypes = {
    massive: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default CurrentList