import PropTypes from 'prop-types';
import css from "../../components/Layout/Layout.module.css";
import Navigation from "../Navigation/Navigation";


export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};