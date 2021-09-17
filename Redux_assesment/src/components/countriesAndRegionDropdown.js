  
import React from "react";
import { connect } from 'react-redux';
import getCountries from '../redux/actions/action';
import DropDown from './DropDown';

class CountriesAndRegionDropdown extends React.Component {
 
  componentDidMount() {
    this.setCountries(this.props.Content.regions[0].name);
  }
  setCountries(name) {
    this.props.getCountries(name);
  }
  render() {
    return (
        <div >
          <DropDown handleOnChange={(name) => this.setCountries(name)} dropdownList={this.props.Content.regions} />
          <DropDown dropdownList={this.props.result} />
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
const mapsDispatchToProps = (dispatch) => ({
  getCountries: (name) => dispatch(getCountries(name))
});
export default connect(mapStateToProps, mapsDispatchToProps)(CountriesAndRegionDropdown);