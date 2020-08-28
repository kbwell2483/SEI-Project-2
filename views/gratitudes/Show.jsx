const React = require('react');
const Default = require('../layouts/Default.jsx');

class Show extends React.Component {
    render() {
        const { date, title, text, _id } = this.props.gratitudes
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
                    <h2 className="header">Happy Thought</h2>
                Date: {this.props.gratitudes.date}<br />
                    <br />
                Title: {this.props.gratitudes.title}<br />
                    <br />
                Entry: {this.props.gratitudes.text}<br />
                    <br />
                    {/* {this.props.gratitudes.body} */}
                    <a href={`/gratitudes/${_id}/edit`}>Edit Entry</a><br />
                    <br />

                    <form action={`/gratitudes/${_id}/?_method=DELETE`} method='POST'>
                        <input type='submit' value='Delete Entry' /><br />
                    </form>
                </div>
            </Default>
        )
    }
}
module.exports = Show;