const React = require('react');
const Default = require('../layouts/Default.jsx');


class Show extends React.Component {
    render() {
        const { title, author, poems, _id } = this.props.poems
        return (
            <Default>
                <div className='container'>
                    <nav className='nav'>
                        <a href='/'>Home</a>
                        <a href='/images'>Happy Images</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>
                    <h2 className="header">Happy Poem</h2>
                Title: {this.props.poems.title} <br />
                    <br />
                Author: {this.props.poems.author}<br />
                    <br />
                    {this.props.poems.body}
                    <br />
                    <br />
                    <a href={`/poems/${_id}/edit`}>Edit Poem</a>
                    <br />
                    <br />
                    <form action={`/poems/${_id}/?_method=DELETE`} method='POST'>
                        <input type='submit' value='Delete Poem' /><br />
                    </form>
                </div>
            </Default>
        )
    }
}
module.exports = Show;