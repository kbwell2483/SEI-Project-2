const React = require('react');
const Default = require('../layouts/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                <div className='container'>
                    <nav className='nav'>
                        <a href='/'>Home</a>
                        <a href='/poems/'>Happy Poems</a>
                        <a href='/gratitudes'>Happy Thoughts</a>
                        <a href='/about'>About Us</a>
                        <a href='/contact-us'>Contact Us</a><br />
                    </nav>
                    <header><h1 className='header'>Happy Images</h1></header>
                    <main className='thumbnails'>
                        {this.props.images.map((images) => {
                            return (
                                <div key={images._id}>
                                    <a href={`/images/${images._id}`}>{images.title}</a> <br />
                                    <br />
                                    {/* <a href={`/images/${images._id}`}>{images.author}</a> <br /> */}
                                    <img src={images.image} /><br />

                                    {/* <a href={`/images/${images._id}/edit`}>Edit Image {images.createdAt}</a><br /> */}
                                    {/* <a href='/images/new'>Add a New Image</a><br /> */}
                                    {/* <form action={`/images/${images._id}/?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Image' /><br /> */}
                                    <br />
                                    <br />
                                    {/* </form> */}
                                </div>
                            )
                        }
                        )
                        }
                    </main>
                    <a href='/images/new'>Add a New Image</a><br />
                </div>
            </Default>
        )
    }
}

module.exports = Index;