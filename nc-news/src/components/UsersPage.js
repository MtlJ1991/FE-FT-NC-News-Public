import React from 'react';
import {getUserDetails, getUserRepos} from '../Api';



class UsersPage extends React.Component {

    state = {
        loading: true,
        name: '',
        username: '',
        userimg: ''
    }

    componentDidMount() {

        getUserDetails(this.props.match.params.username).then(body => {
            console.log(body)
            this.setState({ 
                name: body.user[0].name,
                username: body.user[0].username,
                userimg: body.user[0].avatar_url,
                loading: false
            });
        });
    }
    
    render () {

        console.log(this.state)

        
        return (
            <div className='homeMain'>
            
            <h1>{this.state.name}</h1>

            
            <div className="card">
            <img src={this.state.userimg} alt="Smiley face" height="55" width="55" style={{'float':'right'}}/>

                <p >{this.state.name}</p>
                <p>{this.state.username}</p>

    
            </div>
            </div>
          );
      }


}

export default UsersPage;