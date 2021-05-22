import React from 'react';

const Tag = (props) => {
  const padNum = (x) => {
    x = x.toString();
    return (x.length === 1) ? `0${x}` : `${x}`;
  }

  return (
    <div className="tag">
      <div className="tag-top">
        <img src={ props.icon } alt="" />
        <h3>{ props.year }</h3>
      </div>
      <div className="tag-list">
        {props.events.map((event, index) => (
          <ListItem
            color={props.color}
            number={padNum(++index)}
            text={event}
          />
        ))}
      </div>
    </div>
  );
}

const ListItem = (props) => {
  const theme = { 'color': props.color }

  return (
    <div className="list-item">
      <p className="list-num" style={theme}>{ props.number }</p>
      <p className="list-text">{ props.text }</p>
    </div>
  );
}

export default Tag;