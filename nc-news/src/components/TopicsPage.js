import React from 'react';
import {articlesByTopic, fetchArticles, changeTopicVote} from '../Api';


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
              {this.state.articles.map((article, i) => {
                return <div className="card" key={'idivA'}>
                  <div className="card-body" key={'idivB'}>
                    <h3>{article.title}</h3>
                    <p className="card-text" key={article._id}>{article.body}</p>
                  </div>
                  <div className="card-header" key={article._id}>
                    <span><p className="card-title" key={article._id}>Author:  {article.created_by}</p>
                      <p className="card-title" key={article._id}>Comments:  {article.comments}</p>
                      <p className="card-title" key={article._id}>Votes:  {article.votes}</p>
                      <i className='fa fa-angle-up fa-1g up' aria-hidden="true" onClick={ () => changeTopicVote(this.props.match.params.topic,article._id, 'up').then((body) => {this.setState({articles: body.articles})})}></i>
                      <i className='fa fa-angle-down fa-1g down' aria-hidden="true" onClick={ () => changeTopicVote(this.props.match.params.topic,article._id, 'down').then((body) => {this.setState({articles: body.articles})})}></i>
                      <p className="card-title" key={article._id}>Topic:  {article.belongs_to}</p>

                      </span>

                  </div>
                </div>;
              })}
            </div>
          );
      }


}

export default TopicsPage