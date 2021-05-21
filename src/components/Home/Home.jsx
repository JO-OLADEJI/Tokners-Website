import React from 'react';
import Nav from '../Nav.jsx';
import intro_img from '../../assets/images/intro-img.png';
import crown_icon from '../../assets/icons/crown-icon.png';
import star_icon from '../../assets/icons/star-icon.png';
import user_card_data from './user-card-data.json';
import './home.css';
import UserCard from './UserCard.jsx';


const Home = (props) => {
  const userCardIcons = [crown_icon, star_icon];
  // console.log(user_card_data);

  return (
    <div className="Home">
      <header className="home-header">
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
      </header>
    </div>
  );
}
 
export default Home;