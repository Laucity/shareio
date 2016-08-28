import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Color from 'shareio/lib/Color';

const { height, width } = Dimensions.get('window');

export default class FeedItem extends Component {

  render() {
    let priceString = '$' + this.props.price + '/' + this.props.duration;
    let cityString = this.props.city + ', ' + this.props.state;
    let ratingsString = 'Rating: ' + this.props.rating;
    return (
      <TouchableHighlight
        underlayColor={Color.LIGHTER_GREEN}
        onPress={() => {}}
        style={styles.container}
      >
        <View>
          <View style={styles.personalInfo}>
            <Image
              style={styles.personImage}
              source={{ uri: this.props.profile_img_uri }}
            />
            <Text ref={'title'} style={styles.description}>{this.props.title}</Text>
          </View>
          <View style={styles.productView}>
            <Image
              style={styles.productImage}
              source={{ uri: this.props.item_img_uri }}
            />
            <View style={styles.price}>
              <Text ref={'price'} style={{color: Color.WHITE}}>{priceString}</Text>
            </View>
          </View>
          <View style={[styles.infoContainer, styles.padding_10]}>
            <Text ref={'location'} style={styles.city}>{cityString}</Text>
            <Text ref={'rating'} style={styles.rating}>{ratingsString}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderBottomColor: Color.LIGHT_GRAY,
    borderBottomWidth: 5
  },
  personalInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 12
  },
  personImage: {
    borderRadius: 15,
    height: 30,
    marginRight: 10,
    width: 30
  },
  productView: {
    flexDirection: 'row'
  },
  productImage: {
    height: width * 0.75,
    width: width
  },
  price: {
    alignItems: 'center',
    backgroundColor: Color.ALMOST_BLACK,
    bottom: 20,
    height: 30,
    justifyContent: 'center',
    padding: 5,
    position: 'absolute',
    right: 0
  },
  description: {
    fontSize: 15,
    marginRight: 5
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
});
