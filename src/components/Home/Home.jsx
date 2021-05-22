import React from 'react';
import Nav from '../Nav.jsx';
import logo_small from '../../assets/icons/logo-small.png';
import intro_img from '../../assets/images/intro-img.png';
import crown_icon from '../../assets/icons/crown-icon.png';
import star_icon from '../../assets/icons/star-icon.png';
import diff_img from '../../assets/images/diff-img.png';
import tag1 from '../../assets/icons/tag1.png';
import tag2 from '../../assets/icons/tag2.png';
import tag3 from '../../assets/icons/tag3.png';
import tag4 from '../../assets/icons/tag4.png';
import white_arc from '../../assets/backgrounds/white-arc.png';
import holding_iphone from '../../assets/images/holding-iphone.png';
import user_card_data from './user-card-data.json';
import tag_data from './tag-data.json';
import './home.css';
import UserCard from './UserCard.jsx';
import Tag from './Tag.jsx';


const Home = (props) => {
  const userCardIcons = [crown_icon, star_icon];
  const tagIcons = [tag1, tag2, tag3, tag4];

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
          {tag_data.map((data, index) => (
            <Tag
              key={data.id}
              icon={tagIcons[index]}
              year={data.year}
              color={data.color}
              events={data.events}
            />
          ))}
          <img className="white-arc" src={white_arc} alt="" />
        </div>

        <div className="tk-coming">
          <div className="tk-coming-text">
            <div className="tk-coming-text-head">
              <img src={logo_small} alt="" />
              <h1>Tokner is coming</h1>
            </div>
            <div className="tk-coming-text-body">
              <p>Cryptocurrency adoption is at less than 1% of the global world population with some countries and entities actively fighting against its mass adoption and the smartest developers and nerds holding the fort.</p>

              <p>Bitcoin was the first, and it has since grown to thousands of tokens launched all aiming to fix one problem or the other with some quite simply FOMOing the moment. Our goal is to bring mass adoption to the cryptocurrency space by dumbing it down. How far down? So down that even a celebrity can explain it in simple words to their followers and have them download an app, buy into the social currency of their favourite person and watch their investment as is with other crypto currency project.</p>

              <p>We are trying to do to this space what investment apps did for the "nonexistent retail investors". We are gamefying digital currency, bringing in popular faces instead of hard to understand projects to make it the norm and inadvertently being the "gateway drug" for a lot of people to finally give this space a real look.</p>

              <details className="drop-down-details">
                <summary className="read-more-btn">Read more</summary>
                <p className="first-pg">A new digital economy is coming. People would be just as powerful as countries and creators would be paid beyond the peanuts that conventional social media platforms can offer.</p>

                <p>There would be new markets and advertisers with little to offer would not find home there. Like Kanye said,</p>

                <blockquote>
                  "Personalities would become the new currency, and services would be built on top of them".
                </blockquote>

                <p>Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.</p>

                <p>Currency is digital, it has been that way for a while now, but this time there would be no dead presidents on the money, there would people like you on the money, and you would own it because it would make the most sense in the world.</p>
              </details>
            </div>
          </div>
          <div className="tk-coming-img">
            <img src={holding_iphone} alt="" />
            <div className="tk-coming-img-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Home;