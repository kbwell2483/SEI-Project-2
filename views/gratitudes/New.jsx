const React = require('react');
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div className='comtainer'>
                    <nav className='nav'>
                        <a href='/'>Home</a>
                        <a href='/images'>Happy Images</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>
                    <h2 className="header">Add an Entry</h2>
                    <form action='/gratitudes' method='POST'>
                        <label htmlFor='date'>Date:</label><input type='text' name="date" id='date' /><br />
                        <br />

                        <label htmlFor='title'>Title:</label><input type='text' name="title" id='title' /><br />
                        <br />

                        <label htmlFor='text'>Thoughts:</label><input type="text" name="text" id='text' placeholder="I am MOST grateful for..." /><br />
                        <br />

                        <input type='submit' value='Add Entry' />

                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;