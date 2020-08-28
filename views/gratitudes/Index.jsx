const React = require('react');
const Default = require('../layouts/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                <div className='container'>
                    <nav className='nav'>
                        <a href='/'>Home</a>
                        <a href='/images'>Happy Images</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>

                    <h1 className='header'>Happy Thoughts</h1>
                    {/* <h2>Gratitude Journal Entries</h2> */}

                    <ul>
                        {this.props.gratitudes.map((gratitudes) => {
                            return (
                                <li key={gratitudes._id}>
                                    Date: {gratitudes.date}
                                    <br />
                                    Title: <a href={`/gratitudes/${gratitudes._id}`}>{gratitudes.title}</a> <br />
                                    <br />
                                </li>)
                        }
                        )
                        }
                    </ul>
                    <a href='/gratitudes/new'>Add a New Entry</a><br />
                </div>
            </Default>
        )
    }
}

module.exports = Index;