import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers(users) {
        return users.map(user => {
            return <li key={user.id} >{user.name}</li>
        })
    }

    renderHelmet() {
        return (
            <Helmet>
                <title> {`${this.props.users.length} Users App`} </title>
                <meta property="og:title" content="User App" />
            </Helmet>
        )   
    }


    render() {
        return(
            <div>
               {this.renderHelmet()}
                Here a big list 
                <ul>{this.renderUsers(this.props.users)}</ul>
            </div>
        )
    }
}

const maptateToProps = ({ users }) => ({ users })

const loadData = (store) => {
    return store.dispatch(fetchUsers())
}

export default {
    loadData, 
    component: connect(maptateToProps, { fetchUsers })(UsersList)
}