import React from 'react'
import { useAuth } from '../hooks/useAuth'

import {Navigate, useNavigate } from 'react-router'

const Protected = ({ childern }) => {
    const { loading, user } = useAuth()

    const navigate = useNavigate()
    
    if (loading) {
        
        return <h1>loading ...</h1>
    }
    if (!loading && !user) {
     return  <Navigate to="/login"/>
    }
    return childern
}

export default Protected
