import React from 'react';
import Nav from '../Nav.jsx';
import intro_img from '../../assets/images/intro-img.png';
import crown_icon from '../../assets/icons/crown-icon.png';
import star_icon from '../../assets/icons/star-icon.png';
import diff_img from '../../assets/images/diff-img.png';
import user_card_data from './user-card-data.json';
import './home.css';
import UserCard from './UserCard.jsx';


const Home = (props) => {
  const userCardIcons = [crown_icon, star_icon];

  return (
    <div className="Home">
      <div className="home-header">
        <Nav />

        <div className="intro">
          <div className="intro-text">
            <h6>At Tokners we are</h6>
            <h1>Reimagining social media through the power of the blockchain.</h1>
            <p>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="intro-image">
            <img src={ intro_img } alt="" />
          </div>
        </div>

        <div className="cards">
          {user_card_data.map((details, index) => (
            <UserCard
              key={details.id}
              icon={userCardIcons[index]}
              user={details.user}
              color={details.color}
              description={details.descirption}
            />
          ))}
        </div>

        <div className="difference">
          <div className="diff-img">
            <img src={diff_img} alt="" />
          </div>
          <div className="diff-text">
            <h1>What makes us different?</h1>
            <p>We would only launch tokens with the express permission of the creators.</p>
            <p>There are several thousand celebrities and creators on twitter, tiktok Instagram and YouTube with followings in the millions who we would be engaging before we go viral.</p>
            <p>We would get them on our platform and they would see the opportunity to create a fan driven digital economy where their digital content can be traded as NFTs and their most loyal fans can have the monetary value of their creator's currency increase significantly as they promote their digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>
          </div>
        </div>
        
        <div className="tags">
          
        </div>
      </div>
    </div>
  );
}
 
export default Home;