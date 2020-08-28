const React = require('react');
const Default = require('../layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    const { date, title, text, _id } = this.props.gratitudes;
    const id = _id;
    return (
      <Default>
        <div className='container='>
          <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/images'>Happy Images</a>
            <a href='/poems/'>Happy Poems</a>
            <a href='/gratitudes'>Happy Thoughts</a>
            <a href='/about'>About Us</a>
            <a href='/contact-us'>Contact Us</a><br />
          </nav>
          <h2 className="header">Edit Entry</h2>
          <form action={`/gratitudes/${id}/?_method=PUT`} method="POST">
            <label htmlFor='date'>Date:</label><input type='text' name="date" id='date' defaultValue={date} /><br />
            <br />
            <label htmlFor='title'>Title:</label><input type='text' name="title" id='title' defaultValue={title} /><br />
            <br />
            <label htmlFor='text'>Entry:</label><input type='text' name="text" id='text' defaultValue={text} /><br />
            <br />
            <input type='submit' value='Edit Entry' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Edit;