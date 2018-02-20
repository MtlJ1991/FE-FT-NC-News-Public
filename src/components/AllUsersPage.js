import React from 'react';
import {fetchUsers} from '../Api';

class AllUsersPage extends React.Component {

    
        state = {
          users: []
        }
    
    componentDidMount() {

        fetchUsers().then(body => {
            this.setState({ 
                users: body.users
            });
        });
    }

render () {
    return (
        <div className='allUsers'>

        <div className='userDetails'>
                {this.state.users.map((users, i) => {

            return (

            <div className='userCard'>
            {users.username === 'happyamy2016' || users.username === 'cooljmessy' || users.username ===  'weegembump' ? <img key={i + 341909} className='userImg' src='https://avatars3.githubusercontent.com/u/6791502?v=3&s=200' alt="Smiley face"/> : <img key={i + 341909} className='userImg' src={`${users.avatar_url}`} alt="Smiley face"/>}
                <h4 key={i + 34134}>Name:   {`  ${users.username}`}</h4>
                <h4 key={i + 1698769871}>Username:    {`  ${users.name}`}</h4>
            </div>
            )
        })}
            </div>
            </div> 
        )
    }
};

export default AllUsersPage;