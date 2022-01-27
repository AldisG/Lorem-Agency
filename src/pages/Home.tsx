import { useState } from 'react';
import { listOfBgImg } from '../other/listOfBgImg';
import HomeBgImage from '../pageSections/HomeBgImage';
import HomeSection from '../pageSections/HomeSection';
import '../styles/Home.scss';

const Home = () => {
  const [bgPicToShow, setbgPicToShow] = useState(0);
  const changeHeaderContent = () => {
    if (bgPicToShow < listOfBgImg.length - 1) {
      setbgPicToShow(bgPicToShow + 1);
      return;
    }
    setbgPicToShow(0);
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <HomeSection
          indexOfHomeInfo={bgPicToShow}
          changeHeaderContent={changeHeaderContent}
        />
      </div>
      <HomeBgImage imgIndex={bgPicToShow} />
    </div>
  );
};

export default Home;
