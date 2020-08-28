const React = require('react');
const Default = require('../layouts/Default.jsx');

class About extends React.Component {
  render(){
    return (
    <Default>
    <div className='container'> 
    <nav className='nav'>
        <a href='/'>Home</a>
        <a href='/images'>Happy Images</a>
        <a href='/poems/'>Happy Poems</a>
        <a href='/gratitudes'>Happy Thoughts</a>
        <a href='/contact-us'>Contact Us</a><br/>
    </nav>
      <h1 className="header">About Us</h1>
      <body>
      <p>
        Welcome to My Happy Place, an app designed to take you to your happy place whenever needed. My Happy Place serves as a one stop shop for your favorite happy images, poems and thoughts, all of which are geared towards providing you with a dose of positivity in a seemingly negative world.  We're currently living in a trying time where we're constantly being reminded of all the negativity in the world, and as a result,  stress levels are at an all time high. With a click of a button, you can easily escape from this reality into one focused on the positive aspects of life. It can be so hard sometimes to stay grounded in a happy space. We make it easy with My Happy Place. 
      </p>
      </body>
    </div>
    </Default>
    )
  }
}

module.exports = About;
