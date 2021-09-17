
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  getSelectedValue: state.event.selectValue,
});

const Container = connect(mapStateToProps)(App);

export default Container;