import React from 'react';
import {getUserDetails} from '../Api';


class UsersPage extends React.Component {

    state = {
        loading: true,
        name: '',
        username: '',
        userimg: ''
    }

    componentDidMount() {

        getUserDetails(this.props.match.params.username).then(body => {
            this.setState({ 
                name: body.user[0].name,
                username: body.user[0].username,
                userimg: body.user[0].avatar_url,
                loading: false
            });
        });
    }
    
    render () {

        
        return (
            <div className='user'>
            
            <h1 className='userTitle'>{this.state.name}</h1>

            
            <div className="userCard">
            <img  className='userImg' src={this.state.userimg} alt="Smiley face"/>

                <p className='userName'>{this.state.name}</p>
                <p className='userUserName'>{this.state.username}</p>

    
            </div>
            </div>
          );
      }
}

export default UsersPage;