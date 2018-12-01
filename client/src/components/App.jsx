import React, { Component } from 'react';
import PokeList from './PokeList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
  	  list: [
  	    {name: 'bulbasaur', id: '001', img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwid2-fSuv_eAhVgHTQIHWUdCFIQjRx6BAgBEAU&url=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FBulbasaur_(Pok%25C3%25A9mon)&psig=AOvVaw0eSCflDTZWlS0BEVNED9qE&ust=1543782106180936'}, 
  	    {name: 'ivysaur', id: '002', img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjzqrXwuv_eAhXNCTQIHbPyDzgQjRx6BAgBEAU&url=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FIvysaur_(Pok%25C3%25A9mon)&psig=AOvVaw2ovq_VoJUikVUnQBvuI3uB&ust=1543782169373572'}, 
  	    {name: 'venusaur', id: '003', img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY_-CEu__eAhUCHTQIHcSJDGQQjRx6BAgBEAU&url=https%3A%2F%2Fbulbapedia.bulbagarden.net%2Fwiki%2FVenusaur_(Pok%25C3%25A9mon)&psig=AOvVaw3K6VD3diOBAzUl2L47ATo8&ust=1543782210882804'}
  	  ]
    }
  }

  render() {
    return (
      <div>
        <PokeList list={this.state.list}/>
      </div>
    )
  }
}

export default App;