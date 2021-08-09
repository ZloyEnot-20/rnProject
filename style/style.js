import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // overflowX: 'hidden',
  },
  topBlock: {
    height: '45%',
    // overflowX: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomBlock: {
    height: '55%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // overflowX: 'hidden',
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  infoBlock: {
    top: -25,
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  wrapper: {
    padding: 30,
    paddingBottom: 0,
  },
  arrow: {
    borderColor: '#A7A7A7',
    padding: 7,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 0,
    transform: [{ rotate: '45deg' }],
  },
  directions: {
    flexDirection: 'row',
  },
  origin: {
    flex: 1,
    textAlign: 'center',
  },
  directionInitials: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  prices: {
    paddingTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1157A7',
    height: 90,
    borderRadius: 15,
  },
  priceBlockInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceBlockInfoFonts: {
    fontSize: 13,
    fontStyle: 'normal',
    fontFamily: 'SF Pro Text',
    color: '#FFFFFF',
    opacity: 0.7,
  },
  highLine: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 50,
  },
});
