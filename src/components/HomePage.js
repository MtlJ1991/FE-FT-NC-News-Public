import React from 'react';
import {fetchArticles, changeVote} from '../Api';
import { Link } from "react-router-dom";



class HomePage extends React.Component {

    state = {
        loading: true,
        articles: [],
        userimg: ''
    }

    componentDidMount() {
        fetchArticles().then(body => {
          this.setState({ articles: body.articles, loading: false });
        });


  
      }

      render () {

          return (
            <div className='homeMain'>
            <h1>Northcoders News</h1>
              {this.state.articles.map((article, i) => {
                return <div className="card" key={i + 1698769871}>
                  <div className="card-body" key={i + 16978698761}>
                    <h3>{article.title}</h3>
                    <p className="card-text" key={i + 1679869871}>{article.body}</p>
                  </div>
                  <div className="card-header" key={i + 1169876987}>
                    <span><p className="card-title" key={i + 1698769781}><Link to ={`/users/${article.created_by}`}><i className="fa fa-user fa-1g" aria-hidden="true"></i></Link>   :  {article.created_by}</p>
                      
                      <p className="card-title" key={i + 6978698711}><Link to={`${article._id}/comments`}><i className="fa fa-comments fa-1g" aria-hidden="true"></i></Link> : comments </p>
                      <p className="card-title" key={i + 1365431}><i className="fa fa-heart fa-1g" aria-hidden="true"></i>   :  {article.votes}</p>
                      <i className='fa fa-angle-up fa-1g up' aria-hidden="true" onClick={ () => changeVote(article._id, 'up').then((articles) => {this.setState({articles: articles.articles})})}></i>
                      <i className='fa fa-angle-down fa-1g down' aria-hidden="true" onClick={ () => changeVote(article._id, 'down').then((articles) => {this.setState({articles: articles.articles})})}></i>
                      <p className="card-title" key={i + 1365436541}><Link to={article.belongs_to}><i className="fa fa-question fa-1g" aria-hidden="true"></i></Link>   :  {article.belongs_to}</p>

                      </span>

                  </div>
                </div>;
              })}
            </div>
          );
      }


}

export default HomePage;