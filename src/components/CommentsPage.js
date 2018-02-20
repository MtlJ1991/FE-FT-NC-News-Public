import React from 'react';
import {commentsByArticle, changeCommentVote, addComment, deleteComment} from '../Api';
import { Link } from "react-router-dom";
import Moment from 'moment';



class CommentsPage extends React.Component {

    state = {
        loading: true,
        comments: [],
        newComment: ''
        
    }

    componentDidMount() {
        commentsByArticle(this.props.match.params.id).then(body => {
            this.setState({ comments: body.comments.reverse(), loading: false });
        });
    

    }

    handleChange = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        addComment(this.props.match.params.id, this.state.newComment)
        .then(res => {
            this.setState({
                comments: res.comments.reverse()
            })
        }) 
    }
    render () {
        
        return (
            <div className='homeMain'>
                <h1>Comments</h1>
                <div className='form'>
                 <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="inputPassword2" className="sr-only" >Write a comment...</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.newComment} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-success mb-2" style={{backgroundColor: 'black', borderStyle: 'none'}} onClick={this.handleClick}>Submit</button>
                </form>
                </div>



            {this.state.comments.map((comment, i) => {
                // {console.log(comment._id)}
                return <div className="card" key={i + 2246536}>
                <div className="card-body" key={i + 23643652}>
                  <h3>{comment.title}</h3>
                  <p className="card-text" key={i + 4764}>{comment.body}</p>
                </div>
                <div className="card-header" key={i + 2245647}>
                <span><p className="card-title" key={i + 24756742}><Link to={`/users/${comment.created_by}`}><i className="fa fa-user fa-1g" aria-hidden="true"></i></Link>:  {comment.created_by}</p>
                <p className="card-title" key={i + 24756472}><i className="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {comment.votes}</p>
                    <i className='fa fa-angle-up fa-1g up' aria-hidden="true" onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'up').then((body) => {this.setState({comments: body.comments})})}></i>
                    <i className='fa fa-angle-down fa-1g down' aria-hidden="true" onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'down').then((body) => {this.setState({comments: body.comments})})}></i>
                    <p className='createdAt'>{`Created ${Moment(comment.created_at).fromNow()}`}</p>
                    {comment.created_by === 'northcoder' ? <i className='fa fa-trash fa-1g trash' aria-hidden="true" style={{"paddingLeft": "30px"}}onClick={ () => deleteComment(this.props.match.params.id, comment._id).then((body) => {this.setState({comments: body.comments})})}></i>: ''}

                    </span>

                </div>
              </div>;
            })}
          </div>
        );
    }
    
}

export default CommentsPage;