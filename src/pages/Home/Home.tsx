import React from 'react';
import Cards from './Components/Days/Cards';
import Days from './Components/Days/Days';
import Tabs from './Components/Days/Tabs';
import ThisDay from './Components/ThisDay/ThisDay';
import ThisDayInfo from './Components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

interface Props {}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
