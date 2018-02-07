import React from 'react'
import App from './App'
import Home from './pages/Home'
import UsersList from './pages/UsersList'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users'    
            }
        ]
    }
]

