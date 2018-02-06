import React from 'react';
import {getUserDetails} from '../Api';



class UsersPage extends React.Component {

    state = {
        name: '',
        username: '',
        userimg: ''
    }

    componentDidMount() {
        getUserDetails(this.props.match.params.username).then(body => {
          this.setState({ 
              name: 'details.name',
              username: 'details.username',
              userimg: 'details.avatar_url'
           });
        });
      }

      render () {

          console.log(this.props.match.params.username)
          return (
            <div className='homeMain'>
                <h1>User: </h1>
                <p>{this.state.name}</p>
                <p>{this.state.username}</p>

                <form className="form-inline">
                 
                 <div className="form-group mx-sm-3 mb-2">
                     <label htmlFor="inputPassword2" className="sr-only" >Write a comment...</label>
                     <input type="text" className="form-control" id="inputPassword2" placeholder="Write a comment..." value={this.state.newComment} onChange={this.handleChange}/>
                 </div>
                 <button className="btn btn-primary mb-2" onClick={this.handleClick}>Submit</button>
                 </form>


            </div>
          );
      }


}

export default UsersPage;