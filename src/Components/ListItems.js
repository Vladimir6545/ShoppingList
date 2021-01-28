import React from 'react'
import PropTypes from 'prop-types'

function Items({ list, index }) {
    return <li>
    <strong>{index + 1}</strong>
    {list.title}
    </li>
}

Items.propTypes = {
  list: PropTypes.object.isRequired,
  index: PropTypes.number  
}

export default Items