import React, {Component} from 'react';
import Display from './components/Display';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: "Jean elossy",
      bio:"Sympa...",
      imgSrc: <img src="https://media.istockphoto.com/photos/african-computer-programmer-writing-code-picture-id1255905201" alt="image de dev"/>,
      profession: "Developpeur fullStack",
      shows: false
    }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
   e.preventDefault();
   this.setState({
      fullName: "Jean elossy",
      bio:"Sympa...",
      imgSrc: <img src="https://media.istockphoto.com/photos/african-computer-programmer-writing-code-picture-id1255905201" alt="image de dev"/>,
      profession: "Developpeur fullStack JS React/Node",
      shows: true
   })
 }

  render() {
    return (
      <div>
        <Display fullName={this.state.fullName} bio={this.state.bio} imgSrc={this.state.imgSrc} profession={this.state.profession} shows={this.state.shows} buttonClick={this.handleClick}  />
        
      </div>
    )
  }
}

export default App;

