import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { Day } from './Days';

interface Props {
  day: Day;
}

const Cards = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp_day}>{day.temp_day}</div>
      <div className={s.temp_night}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};

export default Cards;
