'use strict';
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    BackHandler
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
        this.handleBackPress = this.handleBackPress.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(fetchTrends());
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress() {
      if (this.state.searching === true) {
        this.setState({searching: false});
        return true;
      }
    }

    onSearch(searchText) {
       this.setState({ searching: true });
       this.props.dispatch(fetchTweetsSearch(searchText)); 
    }

    render() {
        if (this.props.trends.loading) {
          return (
            <View style={searchContainerStyle.activityIndicatorContainer}>
              <ActivityIndicator animating={true}/>
            </View>
          );
        } else if (this.state.searching) {                         
          return (
            <View style={searchContainerStyle.container}>
              <Search onSearch={this.onSearch} />
              <SearchResult loading={this.props.search.loading} data={this.props.search.data} />                    
            </View>
          );        
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

