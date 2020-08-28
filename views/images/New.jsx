const React = require('react');
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div className='conatainer'>
                    <nav className='nav'>
                        <a href='/'>Home</a>
                        <a href='/images'>Happy Images</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>
                    <h2 className="header">Upload an Image</h2>
                    <form action='/images' method='POST'>
                        <label htmlFor='title'>Title:</label><input type='text' name="title" id='title' /><br />
                        <br />

                        <label htmlFor='author'>Author:</label><input type='text' name="author" id='author' /><br />
                        <br />

                        <label htmlFor='image'>Image Address:</label><input type="text" name="image" id='image' placeholder="https://" /><br />
                        <br />

                        <input type='submit' value='Upload Image' />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;