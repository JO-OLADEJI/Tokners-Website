import React from 'react';


const UserCard = (props) => {
  const cardTheme = { 'color': props.color }

  return (
    <div className="user-card">
      <img src={ props.icon } alt="" />
      <div className="card-body">
        <h1>
          For 
          <span className="user" style={cardTheme}>{ props.user }</span>
        </h1>
        <p className="card-desc">{ props.description }</p>
        <p className="learn-more-link" style={cardTheme}>
          Learn More
          <i class="fa fa-arrow-right" />
        </p>
      </div>
    </div>
  );
}
 
export default UserCard;