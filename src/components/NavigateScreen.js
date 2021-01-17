import React from 'react'
import { Link } from 'react-router-dom'

export const NavigateScreen = () => {
    return (
        <div>
            <Link style={{ color:'white',fontSize:'20px' }} to="/login">Login</Link>
        </div>
    )
}
