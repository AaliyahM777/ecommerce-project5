import React from 'react';
import Carousel from '../elements/Carousel';


// created functional component named app and returns 
// after our closing heading we call our carosuel
function Home() {
  return (
    <div>
        <div>
          {/* Home Page Header */}
          <h1 className="index-header">Welcome To PenPowers</h1>
        </div>
        <div>
          <Carousel />
        </div>
        <div>
        <h2 className="text-center">Who Are We?</h2>
        <p>
          PenPowers provides high quality and unique pen design and functionality. We represent and serve all pen lovers,users
          and collectors.
        </p>
        </div>
        {/* End Header */}
        <hr />
        <div className="whatstyle">
          {/* Preferences of pen styles my images with text */}
          <h2>Whats Your Style?</h2>
          <div>
            <h3>Business</h3>
            <img className="index-img" src="https://www.marketleader.com/wp-content/uploads/2018/11/office-3295556_960_720.jpg" alt="Business" />
            <p>For those in professional workplaces</p>
          </div>
          <div>
            <h3>Arts & Crafts</h3>
            <img className="index-img" src="https://www.jacksonsart.com/blog/wp-content/uploads/2016/10/Drawing_Pens__Inks_Atmos.jpg" alt="Arts & Crafts" />
            <p>For those who create and design</p>
          </div>
          <div>
            <h3>Everyday Users and Pen Collectors</h3>
            <img className="index-img"
              src="https://www.kcet.org/sites/kl/files/styles/kl_image_hero/public/primary_media/visiting_with_huell_howser/VHHpencollectors_630.jpg?itok=0fOVwnah"
              alt="Everyday Users and Pen Collectors" />
            <p>For those who love pen collecting</p>
          </div>
        </div>
    </div>
  );
}

export default Home;
