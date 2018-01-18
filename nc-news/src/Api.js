

export const fetchArticles = () => {
// return fetch(`process.env.${REACT_APP_API_DEVELOPMENT}/articles`)
  return fetch('https://northcoders-news-api.herokuapp.com/api/articles', {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
      
    });
};

export  const changeVote = (id, incomingVote) => {
  // let articleCopy = this.state.articles.slice(0);
  // let oneCopy = Object.assign({}, articleCopy[i]);
  // oneCopy.votes += incomingVote; 
  // articleCopy[i] = oneCopy;
  // this.setState({
  //   articles: articleCopy
  // });
  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => fetchArticles());

};
