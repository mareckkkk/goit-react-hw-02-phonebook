import { Component } from "react";
import propTypes from "prop-types";
import css from "./Profile.module.css";

export default class Profile extends Component {
  static defaultProps = {};

  static propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number,
    }),
  };

  render() {
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={this.props.avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{this.props.username}</p>
          <p className={css.tag}>{this.props.tag}</p>
          <p className={css.location}>{this.props.location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{this.props.stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{this.props.stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}
