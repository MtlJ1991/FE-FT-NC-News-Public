import React from 'react';


const NavBar = () => {

  return (
    <div className='navigation'>
      <nav className="navbar navbar-toggleable-md navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="ncimg"> <img src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" width="450" height="90" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
                
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/" style={{'align':'left'}}>Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/football">Football articles</a>
            <a className="nav-item nav-link" href="/cooking">Cooking articles</a>
            <a className="nav-item nav-link" href="/coding">Coding articles</a>
          </div>
        </div>
      </nav>
    </div>
  );
    
};

export default NavBar;

