'use strict';
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import searchContainerStyle from './searchContainer.style';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions'; //Import your actions
import Search from '../../components/Search/Search';
import SearchResult from '../../components/SearchResult/SearchResult';
import TrendList from '../../components/TrendList/TrendList';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searching: false
        };

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    onSearch() {
       this.setState({ searching: true }); 
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={searchContainerStyle.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else if (this.state.searching) {
            return (
                <View style={searchContainerStyle.container}>
                  <Search onSearch={this.onSearch} />
                  <SearchResult data={this.props.data} />                    
                </View>
            );
        } else {
            return(
                <View style={searchContainerStyle.container}>
                    <Search onSearch={this.onSearch} /> 
                    <TrendList data={this.props.data} />                                      
                </View>
            );
        }
    }

};



function mapStateToProps(state, props) {
    return {
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

