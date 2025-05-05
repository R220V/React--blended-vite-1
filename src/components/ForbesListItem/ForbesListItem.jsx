import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css'

const ForbesListItem = ({avatar, name, capital, isIncrease}) => {
  let Icon;
   isIncrease ? (Icon=FcBullish) : (Icon=FcBearish);
  return (
    <>
  <img
    className={style.avatar}
    src={avatar}
    alt={name}
  />
  <h3 className={style.title}>{name}</h3>
  <span className={style.capital}>
   {capital} <BiDollarCircle color="#2196f3" size={22} />
    <Icon size= {22}/>
  </span>
</>
  );
};

export default ForbesListItem;
