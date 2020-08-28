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
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a>
                    </nav>

                    <header>
                        <h1 className='header'>Happy Poems</h1>
                    </header>
                    <main>
                        <ul className='poems'>
                            {this.props.poems.map((poems) => {
                                return (
                                    <li key={poems._id}>
                                        Title: <a href={`/poems/${poems._id}`}>{poems.title}</a> <br />
                                    Author: {poems.author}<br />
                                        <br />
                                    </li>)
                            }
                            )
                            }
                        </ul>
                    </main>
                    <a href='/poems/new'>Add a New Poem</a><br />
                </div>
            </Default>
        )
    }
}

module.exports = Index;