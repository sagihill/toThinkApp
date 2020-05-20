import React from "react";
import './ThinkList.styles.scss'

import { connect } from 'react-redux';

import { removeThinkItem  } from '../actions';

const ThinkList = ({ handleClick, handleKeyUp, onRemove, handleChange , list, textInput}) => {
    return (
      <div className="ThinkList-container">
        <div  className='input-box'>
          <input
            type="text"
            placeholder="Think about what?"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value= {textInput}
          ></input>
          <button onClick={handleClick}>Add</button>
        </div>
        <ul className='list-component'>
          {list.map((item) => {
            return (
                <li className='list-item' key={item.id}>
                  <button onClick={() => onRemove(item.id)}>X</button>
                  {item.value}
                </li>
            );
          })}
        </ul>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeThinkItem(id))
})

export default connect(null,mapDispatchToProps)(ThinkList);

