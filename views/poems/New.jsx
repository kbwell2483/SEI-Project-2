const React = require('react');
const Default = require('../layouts/Default.jsx');

class New extends React.Component {
    render(){
        return(
            <Default>
            <div className='container'>
                <nav className='nav'>
                    <a href='/'>Home</a>
                    <a href='/images'>Happy Images</a>
                    <a href='/poems/'>Happy Poems</a>
                    <a href='/gratitudes'>Happy Thoughts</a>
                    <a href='/about'>About Us</a>
                    <a href='/contact-us'>Contact Us</a><br/>
                </nav>
            <h2 className="header">Add a Poem</h2>
            <form action='/poems' method ='POST'>
                <label htmlFor='title'>Title:</label><input type='text' name="title" id='title' /><br/>
                <br/>
                <label htmlFor='author'>Author:</label><input type='text' name="author" id='author' /><br/>
                <br/>
                <label htmlFor='body'>Poem:</label><input type='text' name="body" id='body' /><br/>
                <br/>
                <input type='submit' value='Add Poem' />
            </form>
            </div>
            </Default>
        )
    }
}

module.exports = New;