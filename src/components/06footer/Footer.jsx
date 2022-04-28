import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='foot'>
      <footer>Copyright &copy; {`${new Date().getFullYear()}`} Takunda Dzingirayi</footer>
      <div><a href="#">Back to top ➶</a></div>
    </div>
  )
}

export default Footer