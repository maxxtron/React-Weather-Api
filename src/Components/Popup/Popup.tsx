import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/Components/ThisDayInfo/ThisDayInfo';
import ThisDayItems from '../../pages/Home/Components/ThisDayInfo/ThisDayItems';
import s from './Popup.module.scss';

interface Props {
  items: Item[];
}

const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <>
      <div className={s.blue}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Сегодня</div>
          <div className={s.img}>
            <GlobalSvgSelector id='small_sun' />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>Киев</div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItems key={item.icon_id} item={item} />;
          })}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id='close' />
        </div>
      </div>
    </>
  );
};

export default Popup;
