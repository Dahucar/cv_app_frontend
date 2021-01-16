import React from 'react'
import { Link } from 'react-router-dom'

export const NavigateScreen = () => {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link>
            <br/>
            <Link to="/login">Login</Link>
        </div>
    )
}
