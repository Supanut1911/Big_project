import React, {Component} from 'react';
import {firebase} from './firebase'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount = () => {
    this.handleFetch()
  }

  handleFetch = () => {
    let database = firebase.database().ref("node1")
    database.once('value', async (snapshot) => {
      if (snapshot.exists()) {
        let arr = []
        snapshot.forEach((data) => {
            arr.push({
                id: data.val().id,
                name : data.val().name,
                price: data.val().price
            })
        });
        console.log(arr)
        await this.setState({ data: arr})
    }
    })
 
  }


  render() {
    
    return (
      <div>
          <h1>big</h1>
           {this.state.data.map( (item, key) => {
             return <ul key = {key}>
                       <li>id: {item.id} &nbsp;&nbsp; name: {item.name} &nbsp;&nbsp; price: {item.price}</li>
                    </ul>
            })}
      </div>
   
      
    )
  }
  
}

export default App;
