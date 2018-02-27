import React from 'react';


class ErrorPage extends React.Component {

    state = {
        loading: true,
        name: '',
        username: '',
        userimg: ''
    }

    render () {

        
        return (
            <div className='user'>
            
            <h1> 404 page not found </h1>
            
            </div>
          );
      }
}

export default ErrorPage;