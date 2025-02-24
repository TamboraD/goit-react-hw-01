import clsx from "clsx"
import css from "./FriendListItem.module.css"
export default function FriendListItem({ avatar, name, isOnline }) {
    const statusOnline = clsx(css.status, isOnline ? css.isOnline : css.isOffline)
    return (
        <div className={css.container}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.text}>{name}</p>
            <p className={statusOnline}>
                {isOnline ? "Online" : "Offline"}
            </p>
</div>
    )
}