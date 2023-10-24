import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployerAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';
class App extends Component {
  constructor(props){
    super(props )
    this.state = {
      data: [
        {name: 'Bob',salary: 800, increase: true, id:1},
        {name: 'Mary',salary: 1600, increase: false, id:2},
        {name: 'Tomas',salary: 2300, increase: true, id:3},
    
      ] 
    }
  }

 deleteItem = (id)=>{
  this.setState(({data}) =>{
      const index = data.findIndex(elem => elem.id === id)
      return {
        data: data.filter(item => item.id !==id)
      }
  })
 }

  render(){
    return (
      <div className='app'>
        <AppInfo data={this.state.data}/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList data={this.state.data} onDelete={this.deleteItem}/>
        <EmployerAddForm/>
      </div>
    );
  }
}

export default App;