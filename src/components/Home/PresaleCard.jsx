import React from 'react';


const PresaleCard = (props) => {
  return (
    <div className="presale-card">
      <img src={ props.icon } alt="" />
      <h1>{ props.name }</h1>
      <h3>{ props.period }</h3>

      <h2>{ props.conversion }</h2>
      <p className="presale-cap">
        Soft cap: 
        <span className="presale-cap-hl">{ props.softCap }</span>
      </p>
      <p className="presale-cap">
        Hard cap: 
        <span className="presale-cap-hl">{ props.hardCap }</span>
      </p>

      <p className="bg-text">{ props.number }</p>
    </div>
  );
}

export default PresaleCard;