import css from '../TransactionItem/TransactionItem.module.css'

export default function TransactionItem({ type, amount, currency }) {
    return (
        <tr className={css.row}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
    )
}