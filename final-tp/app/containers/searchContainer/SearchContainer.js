'use strict';
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import searchContainerStyle from './searchContainer.style';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import SearchResult from '../../components/SearchResult/SearchResult';
import TrendList from '../../components/TrendList/TrendList';
import {fetchTrends} from '../../actions/trendsActions';
import {fetchTweetsSearch} from '../../actions/searchTweetsActions';

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searching: false
        };

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(fetchTrends());
    }

    onSearch() {
       this.setState({ searching: true }); 
    }

    render() {
        if (this.props.trends.loading) {
            return (
                <View style={searchContainerStyle.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else if (this.state.searching) {
            if (this.props.search.loading) {
              return (
                <View style={searchContainerStyle.container}>
                    <ActivityIndicator animating={true}/>
                </View>
              );
            } else {  
              return (
                <View style={searchContainerStyle.container}>
                  <Search onSearch={this.onSearch} />
                  <SearchResult data={this.props.search.data} />                    
                </View>
              );
            }
        } else {
            return(
                <View style={searchContainerStyle.container}>
                    <Search onSearch={this.onSearch} /> 
                    <TrendList data={this.props.trends.data} />                                      
                </View>
            );
        }
    }

};



function mapStateToProps(state, props) {
    return {
        trends: state.trendsReducer,
        search: state.searchTweetsReducer
    }
}
//Connect everything
export default connect(mapStateToProps)(SearchContainer);

