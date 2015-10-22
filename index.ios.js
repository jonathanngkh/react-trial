/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var MOCKED_MOVIES_DATA = [
  { title: 'Title', year: '2015', posters: { thumbnail: 'http://i.imgur.com/UePbdph.jpg' } },
];

var reactTrial = React.createClass({
  render: function() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={ styles.container }>
        <Image source={ { uri: movie.posters.thumbnail } } style={ styles.thumbnail } />
        <View style={ styles.rightcontainer }>
          <Text style={ styles.title }>{ movie.title }</Text>
          <Text style={ styles.year }>{ movie.year }</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('reactTrial', () => reactTrial);
