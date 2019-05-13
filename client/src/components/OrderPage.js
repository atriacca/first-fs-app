import React from 'react'
import PropTypes from 'prop-types'

const OrderPage = props => {
    const { username } = props
    return (
        <div>
            <h1>Hello {username}!</h1>
        </div>
    )
}

OrderPage.propTypes = {
    username: PropTypes.string
}

export default OrderPage