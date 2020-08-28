const React = require('react');
const Default = require('../layouts/Default.jsx');

class Home extends React.Component {
  render(){
    return (
      <Default>
      <div className='container'>
      <nav className="nav">
        <a href='/images'>Happy Images</a>
        <a href='/poems/'>Happy Poems</a>
        <a href='/gratitudes'>Happy Thoughts</a>
        <a href='/about'>About Us</a>
        <a href='/contact-us'>Contact Us</a><br/>
        </nav>
      <header>
        <h1 className='header1'>My Happy Place</h1>
      </header>
      <body className='body'></body>  
      </div>
      </Default>
    )
  }
}

module.exports = Home;
