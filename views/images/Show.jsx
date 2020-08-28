const React = require('react');
const Default = require('../layouts/Default.jsx');

class Show extends React.Component {
    render() {
        const { title, author, image, _id } = this.props.images
        return (
            <Default>
                <div className='container'>
                    <nav class='nav'>
                        <a href='/'>Home</a>
                        <a href='/images'>Happy Images</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>
                    <h2 className="header">Happy Image</h2>
                    <div className="images-show">Title: {this.props.images.title}<br />
                        <br />
                Creator: {this.props.images.author}<br />
                        <br />
                        <img src={image}></img>
                        <br />
                        <a href={`/images/${_id}/edit`}>Edit Image</a><br />
                        <br />

                        <form action={`/images/${_id}/?_method=DELETE`} method='POST'>
                            <input type='submit' value='Delete Image' /><br />
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}
module.exports = Show;