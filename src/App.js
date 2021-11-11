import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Header from '../src/components/header';
import SideBar from './components/sidebar/sidebar';

import { selectVillage } from './actions';

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
  selectVillage: PropTypes.func,
};


const mapStateToProps = (state) => ({
  village: state.village,
  filter: state.filter,
});

const mapDispatchToProps = {
  selectVillage: selectVillage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
