
import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats: {followers, views, likes} }) {
    return (
<div className={css.container}>
  <div className={css.box}>
    <img className={css.imgProfile}
      src={image}
      alt={`Avatar of + ${name}`}
    />
    <p className={css.name}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.title}>Followers</span>
      <span className={css.num}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.title}>Views</span>
      <span className={css.num}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.title}>Likes</span>
      <span className={css.num}>{likes}</span>
    </li>
  </ul>
</div>
    )
}