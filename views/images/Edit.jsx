const React = require('react');
const Default = require('../layouts/Default.jsx');

class Edit extends React.Component {
  render() {
    const { title, author, image, _id } = this.props.images;
    const id = _id;
    return (
      <Default>
        <div container='class'>
          <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/images'>Happy Images</a>
            <a href='/poems/'>Happy Poems</a>
            <a href='/gratitudes'>Happy Thoughts</a>
            <a href='/about'>About Us</a>
            <a href='/contact-us'>Contact Us</a><br />
          </nav>
          <h2 className="header">Edit Image</h2>
          <div className="images-show">
            <form action={`/images/${id}/?_method=PUT`} method="POST">
              <label htmlFor='title'>Title: </label><input type='text' name='title' id='title' defaultValue={title} /><br />
              <br />
              <label htmlFor='author'>Photograher: </label><input type='text' name='author' id='author' defaultValue={author} /><br />
              <br />
              <label htmlFor='image'>Image Address: </label><input type='text' name='image' id='image' defaultValue={image} /><br />
              <br />
              <input type='submit' value='Edit Image' />
            </form>
          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Edit;