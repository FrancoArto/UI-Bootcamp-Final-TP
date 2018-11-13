'use strict';
import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Settings from '../../components/Settings/Settings';
import * as Actions from '../../actions'; //Import your actions
import settingsContainerStyle from './settingsContainer.style';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
        <View style={settingsContainerStyle.container}>
          <Settings />
        </View>
    );
  }
}
  
function mapStateToProps(state, props) {
  return {
    data: state.timeLineReducer.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

  //Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);

