import TransactionItem from "../TransactionItem/TransactionItem"
import css from '../TransactionHistory/TransaktionHistory.module.css'

export default function TransactionFunction({items}) {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.rowBlack}>
      <th className={css.text}>Type</th>
      <th className={css.text}>Amount</th>
      <th className={css.text}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map((item) => (
            <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                key={item.id}
                />
    ))}
  </tbody>
</table>
    )
}