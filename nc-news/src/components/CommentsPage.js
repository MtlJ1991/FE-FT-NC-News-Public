import React from 'react';
import {commentsByArticle, changeCommentVote} from '../Api';


class CommentsPage extends React.Component {

    state = {
        loading: true,
        comments: []
    }

    componentDidMount() {
        commentsByArticle(this.props.match.params.id).then(body => {
            // console.log(this.props.match.params._id)
            this.setState({ comments: body.comments, loading: false });
        });
    }
    render () {
        
        return (
            <div className='homeMain'>
            {this.state.comments.map((comment, i) => {
                // {console.log(comment._id)}
                return <div className="card" key={'idivA'}>
                <div className="card-body" key={'idivB'}>
                  <h3>{comment.title}</h3>
                  <p className="card-text" key={comment._id}>{comment.body}</p>
                </div>
                <div className="card-header" key={comment._id}>
                  <span><p className="card-title" key={comment._id}><i class="fa fa-user fa-1g" aria-hidden="true"></i>   :  {comment.created_by}</p>
                    <p className="card-title" key={comment._id}><i class="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {comment.votes}</p>
                    <i className='fa fa-angle-up fa-1g up' aria-hidden="true" onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'up').then((body) => {this.setState({comments: body.comments})})}></i>
                    <i className='fa fa-angle-down fa-1g down' aria-hidden="true" onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'down').then((body) => {this.setState({comments: body.comments})})}></i>

                    </span>

                </div>
              </div>;
            })}
          </div>
        );
    }
    
}

export default CommentsPage;