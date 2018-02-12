import React from 'react';
import {articlesByTopic, changeTopicVote} from '../Api';
import {Link} from "react-router-dom";



class TopicsPage extends React.Component {

    state = {
        loading: true,
        articles: []
    }

    componentDidMount() {

        articlesByTopic(this.props.match.params.topic).then(body => {
          this.setState({ articles: body.articles, loading: false });
        });
      }

      render () {
          return (
            <div className='homeMain'>
              <h1>{this.props.match.params.topic} articles.</h1>
              {this.state.articles.map((article, i) => {
                return <div className="card" key={i + 25325432541}>
                  <div className="card-body" key={i + 47654752}>
                    <h3>{article.title}</h3>
                    <p className="card-text" key={i + 65436543}>{article.body}</p>
                  </div>
                  <div className="card-header" key={i + 364344}>
              
                  <span><p className="card-title" key={i + 24756742}><Link to={`users/${article.created_by}`}><i className="fa fa-user fa-1g" aria-hidden="true"></i></Link>:  {article.created_by}</p>
                  <p className="card-title" key={i + 7986975}><Link to={`${article._id}/comments`}><i className="fa fa-comments fa-1g" aria-hidden="true"></i></Link>   :  {article.comments}</p>
                      <p className="card-title" key={i + 968769876}><i className="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {article.votes}</p>
                      <i className='fa fa-angle-up fa-1g up' aria-hidden="true" onClick={ () => changeTopicVote(this.props.match.params.topic,article._id, 'up').then((body) => {this.setState({articles: body.articles})})}></i>
                      <i className='fa fa-angle-down fa-1g down' aria-hidden="true" onClick={ () => changeTopicVote(this.props.match.params.topic,article._id, 'down').then((body) => {this.setState({articles: body.articles})})}></i>
                      <p className="card-title" key={i + 698769877}><i className="fa fa-question fa-1g" aria-hidden="true"></i>   :  {article.belongs_to}</p>

                      </span>

                  </div>
                </div>;
              })}
            </div>
          );
      }


}

export default TopicsPage