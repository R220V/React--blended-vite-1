 import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem.jsx';

 const ForbesList = ({listBOO}) => {

return (
<div className={style.board}>
    <div className={style.header}>
      <h2 className={style.title}>
        <span className={style.titleTop}>Forbes</span>
        <span className={style.titleBottom}>Leader board</span>
      </h2>
      </div>
  
    <ul className={style.list}>
       {listBOO.map(({id, ...person}) => {
        return (
          <li className={style.item} key={id}>
            <ForbesListItem {...person}/>
            </li>
        );
       })}
         
    </ul>
  
  </div>
  );
};

export default ForbesList;
