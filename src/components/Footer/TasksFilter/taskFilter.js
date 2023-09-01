import React, { Component } from "react";
import './taskFilter.css';

export default class TaskFilter extends Component {

  state = {
    activeButton: 'All'
  };

  setActiveButton = (filterType) => {
    this.setState({
      activeButton: filterType
    });
    this.props.changeFilter(filterType);
  };
  
  render() {

    const { activeButton } = this.state;
 
    return (
      <div>
        <li>
          <button 
            className={ activeButton === 'All' ? 'selected' : '' }
            onClick={ () => this.setActiveButton('All') }
          >All</button>
        </li>
        <li>
          <button
            className={ activeButton === 'Active' ? 'selected' : '' }
            onClick={ () => this.setActiveButton('Active') } 
          >Active</button>
        </li>
        <li>
          <button
            className={ activeButton === 'Completed' ? 'selected' : '' }
            onClick={ () => this.setActiveButton('Completed') } 
          >Completed</button>
        </li>
      </div>
    );
  };
};