import {StyleSheet, Dimensions} from 'react-native';

const {width: ScreenWidth} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: 60,
    width: ScreenWidth * 0.9,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  textContainer: {
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  imageStyle: {
    height: 25,
    width: 25,
    left: 24,
    position: 'absolute',
  },
});
