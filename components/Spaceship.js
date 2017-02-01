const React = require('react')
const ReactDom = require('react-dom')

class Spaceship extends React.Component {
  render(){
    return (
      <div className="spaceship">
        <h1> Name: {this.props.name} </h1>
        <p> Speed: {this.props.speed} </p>
        <p> Rockets: {this.props.hasRockets} </p>
        <p> colors: {this.props.colors.join(", ")} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ["black", "red"]
}

module.exports = Spaceship
