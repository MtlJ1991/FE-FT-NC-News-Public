import React from 'react';
import {commentsByArticle, changeCommentVote, addComment, deleteComment, fetchArticles, changeVote} from '../Api';
import { Link } from "react-router-dom";
import Moment from 'moment';


class CommentsPage extends React.Component {

    state = {
        loading: true,
        comments: [],
        newComment: '',
        articles: []
    }

    componentDidMount() {

        fetchArticles().then(body => {
            this.setState({ articles: body.articles, loading: false });
          });

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

                {this.state.articles.map((article, i) => {

                return article._id === this.props.match.params.id ?
                    <div className="card" key={i + 1698769871}>
                    <div className="card-body" key={i + 16978698761}>
                        <h3>{article.title}</h3>
                         <p className="card-text" key={i + 1679869871}>{article.body}</p>
                    </div>
                    <div className="card-header" key={i + 1169876987}>

                    <span><Link to={`/users/${article.created_by}`}> <p className="card-title" key={i + 1698769781}><i className="fa fa-user fa-1g" aria-hidden="true"></i>  :  {article.created_by}</p></Link>
                         <Link to={`articles/${article._id}/comments`}><p className="card-title" key={i + 6978698711}><i className="fa fa-comments fa-1g" aria-hidden="true"></i>: comments </p> </Link> 
                         <p className="card-title" key={i + 1365431}><i className="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {article.votes}</p>
                         <i className='fa fa-angle-up fa-1g up' aria-hidden="true" 
                            onClick={() => changeVote(article._id, 'up')
                                .then((articles) => {
                                    this.setState({articles: articles.articles})}
                                    )}>
                         </i>

                          <i className='fa fa-angle-down fa-1g down' aria-hidden="true" 
                            onClick={() => changeVote(article._id, 'down')
                                .then((articles) => {
                                    this.setState({articles: articles.articles})}
                                    )}>
                          </i>

                        <Link to={`/${article.belongs_to}`}><p className="card-title" key={i + 1365436541}><i className="fa fa-question fa-1g" aria-hidden="true"></i>   :  {article.belongs_to}</p></Link> 
                    </span>

            </div>
            </div>
            : <p></p>
            })}

            {this.state.comments.map((comment, i) => {
                // {console.log(comment._id)}
                return <div className="card" key={i + 2246536}>
                <div className="card-body" key={i + 23643652}>
                  <h3>{comment.title}</h3>
                  <p className="card-text" key={i + 4764}>{comment.body}</p>
                </div>
                <div className="card-header" key={i + 2245647}>
                     <span>
                        <Link to={`/users/${comment.created_by}`}><p className="card-title" key={i + 24756742}><i className="fa fa-user fa-1g" aria-hidden="true"></i>:  {comment.created_by}</p></Link>
                        <p className="card-title" key={i + 24756472}><i className="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {comment.votes}</p>
                        <i className='fa fa-angle-up fa-1g up' aria-hidden="true" 
                            onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'up')
                                .then((body) => {
                                    this.setState({comments: body.comments.reverse()})}
                                    )}>
                        </i>

                        <i className='fa fa-angle-down fa-1g down' aria-hidden="true" 
                            onClick={ () => changeCommentVote(this.props.match.params.id,comment._id, 'down')
                                .then((body) => {
                                    this.setState({comments: body.comments.reverse()})}
                                    )}>
                        </i>

                        <p className='createdAt'>{`Created ${Moment(comment.created_at).fromNow()}`}</p>
                        {comment.created_by === 'northcoder' ? <i className='fa fa-trash fa-1g trash' aria-hidden="true" style={{"paddingLeft": "30px"}}onClick={ () => deleteComment(this.props.match.params.id, comment._id).then((body) => {this.setState({comments: body.comments.reverse()})})}></i>: ''}

                    </span>

                </div>
              </div>;
            })}
          </div>
        );
    }
    
}

export default CommentsPage;