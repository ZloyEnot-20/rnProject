import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');
const height = (width * 100) / 60;
const Carousel = () => {
  const pictures = [
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/f425/b7e0/0f7218d302a9118778b4efee20a378ae?Expires=1629072000&Signature=H7CCZYMdNJEDXrfNmyU4nVAtcuPQtOW50md5kKvdwITdVgox9TnBpw98hZJgvt14NeqxvirOe0oovioFRRrelvlX76tF4I1I9JpKf2pU2Wld8uqfOp8YtB34Fd2vCplyaYph1qeKrsVrakG2RGG0-vvmy7AgwIi1UTAP0WpzIeFiYJRFFH40L2Ul8so6QIxPq4rtg7Snq0Wi59n4LZyFLwpf4QykyN65Bsxuix-YDnZTFrOOGdqrAtWn8adLE8MyLC6sHMq1c2xy~gIZ~xGhbsPA7Y1VkkYlIiT~DeXYrzfWHWGaaMcu1g4fPuglkLyOYEx7wESbh0guatV7UVo6Rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/b61b/7a30/a037553bc42c41e30f279a2750d72080?Expires=1629072000&Signature=K1FtIzL1IZ96VyQEHh9~NjQnA97bV7q9NwWzOOakXDGqfOIYJrhoxy2sebFCPVeLlRDe~ALP36XyullUfzgS~4yf1yASF-hKGYTXRJtmpqGYJ1bkN088RkLYBsLRoMDaHRp0k14q4yQXqo2ijpZGqX~ewL-QlQj8bRX1eX2pIxUb-mpLEET-uOHERS~RUe~-qmPY2lA-h6Ygk~hX~xoXBmdkumHjJ8xpIgH-9XDgwbo3vjgoI11o3coMcPkq-Z0iTzv7DwPduNT~pG31os4nOBiVP~1HEdLfk~aVmeqrOm6udPfXXnLOfhcuBH2K9gCS4LWO4TyzbzlpkWEkGQYtbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  ];

  return (
    <View style={styles.carousel}>
      
        <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled style={{ width: '100%', height: '100%'}}>
          {pictures.map((i, index) => {
            return (
              <View
                style={[
                  styles.carouselImage,
                  { marginLeft: index === 0 ? 30 : 0 },
                ]}
              >
                <Image
                  source={{ uri: i }}
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                />
              </View>
            );
          })}
        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    // overflowX: 'hidden',
    
  },
  carouselImage: {
    width: 140,
    height: 200,
    marginRight: 10,
  },
  imgWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Carousel;
