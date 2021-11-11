import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Header from '../src/components/header';
import SideBar from './components/sidebar/sidebar';

function App({village, filter}) {
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
}

App.propTypes = {
  village: PropTypes.string,
  filter: PropTypes.string,
};


const mapStateToProps = (state) => ({
  village: state.village,
  filter: state.filter,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
