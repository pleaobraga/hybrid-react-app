import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins()
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id} >{admin.name}</li>
        })
    }

    render() {
        return(
            <div>
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }

}


const mapstateToProps = ({ admins }) => ({ admins })

export default {
    component: connect(mapstateToProps, { fetchAdmins })(
        requireAuth(AdminsListPage)
    ),
    loadData: ({ dispatch }) => dispatch(fetchAdmins()) 
}