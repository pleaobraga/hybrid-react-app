import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers(users) {
        return users.map(user => {
            return <li key={user.id} >{user.name}</li>
        })
    }

    render() {
        return(
            <div>
                Here a big list 
                <ul>{this.renderUsers(this.props.users)}</ul>
            </div>
        )
    }
}

const maptateToProps = ({ users }) => ({ users })

export default connect(maptateToProps, { fetchUsers })(UsersList)