import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import  StatisticsItem  from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];


const Statistics = ({title, stats}) => {
  return (
    <>
    {title && <h3 className={style.title}>{title}</h3>}

    <ul className={style.list}>
        {stats.map((date, index) => {
        return (
      <li className={style.item} key={date.id}>
        <StatisticsItem stats={date} icon={icons[index]}/>
      </li>
        )
})}
    </ul>
    </>
  )
};

export default Statistics;
