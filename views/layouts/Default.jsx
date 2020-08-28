const React = require('react')


class Default extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab&family=Sacramento&display=swap" rel="stylesheet"></link>
                    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link> */}
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Default;
