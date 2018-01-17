import React from 'react';

const Home = ({articles}) => {
      console.log(articles);
  return (
    <div className='homeMain'>
      {articles.map((article, i) => {
        return <div className="card" key={i}>
          <div className="card-body" key={i}>
            <h3>{article.title}</h3>
            <p className="card-text" key={i}>{article.body}</p>
          </div>
          <div className="card-header" key={i}>
            <span><p className="card-title" key={i}>Author:  {article.created_by}</p>
              <p className="card-title" key={i}>Comments:  {article.comments}</p>
              <p className="card-title" key={i}>Votes:  {article.votes}</p>
              <i className='fa fa-angle-up fa-1g upDown' aria-hidden="true"></i>
              <i className='fa fa-angle-down fa-1g upDown' aria-hidden="true"></i></span>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Home;




