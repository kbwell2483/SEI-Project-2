const React = require('react');
const Default = require('../layouts/Default.jsx');

class ContactUs extends React.Component {
  render(){
    return (
      <Default>
      <div className='container'>
      <nav className='nav'>
        <a href='/'>Home</a>
        <a href='/images'>Happy Images</a>
        <a href='/poems/'>Happy Poems</a>
        <a href='/gratitudes'>Happy Thoughts</a>
        <a href='/about'>About Us</a>
        </nav>
      <header className='header'>
        <h1 className="header">Contact Us</h1>
      </header>
      <body className="images-show">
      <p>
        <h3>By Mail:</h3>
        My Happy Place<br/>
        PO Box 123<br/>
        Atlanta, GA 12345
      </p>
      <br/>
      <p>
        <h3>By Phone:</h3>
        (404)555-5555
      </p>
      <br/>
      <p>
        <h3>By Email:</h3>
        hello@myhappyplace.com
      </p>
      </body>
      </div>
      </Default>
    )
  }
}

module.exports = ContactUs;
