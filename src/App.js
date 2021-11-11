import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Header from '../src/components/header';
import SideBar from './components/sidebar/sidebar';
import InformationBar from './components/information/informationbar';
function App({village, filter}) {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <InformationBar/>
      </div>
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
