import { format } from 'date-fns';
import style from './CryptoHistory.module.css'


const CryptoHistory = ({itemsBOO}) => {

  return (
<table className={style.table}>
  <thead className={style.thead}>
    <tr>
    <th className={style.th1}>№</th>
      <th className={style.th2}>ACN №</th>
      <th className={style.th3}>PRICE</th>
      <th className={style.th3}>AMOUNT</th>
      <th className={style.th3}>DATE</th>
    </tr>
  </thead>

{/* id — унікальний ідентифікатор транзакції
    price — залишок на рахунку
    amount - сума транзакції
    date - дата транзакції */}
  <tbody>
      {itemsBOO.map(({id, price, amount, date}, index) => {
          return (
            <tr className={style.tr} key={id}>
              <th className={style.th1}>{index + 1}</th>
              <td className={style.td}>{id}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{format(new Date(date), 'Pp')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CryptoHistory;
