import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

interface Props {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>Киев</div>
      </div>
    </div>
  );
};

export default ThisDay;
