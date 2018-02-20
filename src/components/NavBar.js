import React from 'react';


const NavBar = () => {

  return (
    <div className='navigation'>
      <nav className="navbarNav">
        <a className="navimg"> <img src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png"alt=""/></a>
        
        <div className="navbar">
          <a className="nav-item" href="/" style={{'align':'left'}}>Home <span className="sr-only">(current)</span></a>
          <a className="nav-item" href="/football">Football articles</a>
          <a className="nav-item" href="/cooking">Cooking articles</a>
          <a className="nav-item" href="/coding">Coding articles</a>
          <a className="nav-item" href="/users">Users</a>

        </div>
        
      </nav>
    </div>
  );
    
};

export default NavBar;

