import React, { Component } from "react";
import { connect } from 'react-redux';

import "./ToThinkApp.styles.scss";

import ThinkList from '../components/ThinkList';

import { setInputField, addThinkItem } from '../actions';

class ToThinkApp extends Component {

  onRemove = (id) => {
    const { thinkList } = this.state;
    let currThinkList = thinkList;
    this.setState({
      thinkList: currThinkList.filter( item => item.id !== id),
    });
    console.log(this.state);
  }

  render () {
    const { onInputChange, onButtonClick, input, thinkList, count } = this.props;
    const addThinkItemFunc = (input) => {
      if(input==='')
        return;
      onButtonClick(input)
      let event =  { target: {value: ""}};
      onInputChange(event);
    }
    return (
      <div className="ToThinkApp">
        <h1>To Think List</h1>
        <ThinkList
          className='ThinkList'
          handleClick = { () => {
            addThinkItemFunc(input);
          } }
          handleChange = { onInputChange }
          handleKeyUp = { (event) => {
            if(event.keyCode===13){
              addThinkItemFunc(input);
            }}
            }
          textInput = {input}
          list = {thinkList}
          counter = {count}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.changeInputField.input,
    thinkList: state.changeThinkList.thinkList,
    count: state.changeThinkList.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(setInputField(event.target.value)),
    onButtonClick: (text) => dispatch(addThinkItem(text)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToThinkApp);
