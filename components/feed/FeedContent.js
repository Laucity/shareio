import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  View
} from 'react-native';

import FeedItem from './FeedItem';
import NavBar from 'shareio/components/navbar/NavBar';

import Color from 'shareio/lib/Color';

import data from 'shareio/assets/seed.json';

export default class Feed extends Component {

  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(data),
      offset: 0,
      direction: 'up'
    };
  }

  _onScroll(event) {
    let currentOffset = event.nativeEvent.contentOffset.y;
    let direction = currentOffset > this.state.offset ? 'down' : 'up';
    this.setState({ offset: currentOffset });
    this.setState({ direction: direction });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar id={'feed'} />
        <ListView
          onScroll={this._onScroll.bind(this)}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <FeedItem {...rowData} /> }
          style={styles.container}>
        </ListView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flex: 1
  }
});
