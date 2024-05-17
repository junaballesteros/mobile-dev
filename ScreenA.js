import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Button, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {};

  const [counter, setCounter] = useState(0);
  const [counters, setCounters] = useState(0);

  const onClickHandler = () => {
    setCounter(counter + 1);
  };

  const onClickHandlers = () => {
    setCounter(counter - 1);
  };
  const onClickHandler25 = () => {
    setCounters(counters + 1);
  };

  const onClickHandlers25 = () => {
    setCounters(counters - 1);
  };

  return (
    <View style={styles.body}>
      <View style={styles.body1}>
        <Image style={styles.image} source={require('./assets/icons.png')} />
      </View>
      <View style={styles.body2}>
        <Text style={styles.text2}>Cart</Text>

        <View style={styles.plus1}>
          <Image
            style={styles.product}
            source={require('./assets/icons.png')}
          />
          <View style={styles.plus12}>
            <Text style={styles.textplus}>Product Name</Text>
            <Text style={styles.textplus}>${counter * 15}</Text>
            <View style={styles.plus}>
              <View style={styles.button}>
                <Button title="+" onPress={onClickHandler}></Button>
              </View>
              <Text style={styles.textplus}>{counter}</Text>
              <View style={styles.button}>
                <Button title="-" onPress={onClickHandlers}></Button>
              </View>
            </View>
          </View>
        </View>
                <View style={styles.plus1}>
        <Image
            style={styles.product}
            source={require('./assets/icons.png')}
          />
           <View style={styles.plus12}>
            <Text style={styles.textplus}>Product Name</Text>
        <Text style={styles.textplus}>${counters * 25}</Text>
        <View style={styles.plus}>
          <View style={styles.button}>
            <Button title="+" onPress={onClickHandler25}></Button>
          </View>
          <Text style={styles.textplus}>{counters}</Text>
          <View style={styles.button}>
            <Button title="-" onPress={onClickHandlers25}></Button>
          </View>
        </View>
        </View>
        </View>
        <View></View>
        <View style={styles.total}>
          <View style={styles.bodybaba}>
            <Text style={styles.text22}>Total</Text>
          </View>
          <View style={styles.bodybaba1}>
            <Text style={styles.textplusprice}>
              ${counter * 15 + counters * 25}
            </Text>
          </View>
        </View>
        <View style={styles.shipping}>
          <View style={styles.bodybaba}>
            <Text style={styles.text22}>Shipping</Text>
          </View>
          <View style={styles.bodybaba1}>
            <Text style={styles.textplusprice}>$15</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.body3}>
        <View style={styles.bodybaba}>
          <Text style={styles.text3}>To Pay</Text>
        </View>
        <View style={styles.bodybaba1}>
          <Text style={styles.texttopay}>
            ${counter * 15 + counters * 25 + 15}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#B9F3FC',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  body1: {
    borderBottomWidth: 1,
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  body2: {
    flex: 9,
    borderBottomWidth: 1,
  },
  body3: {
    flex: 1.5,
    flexDirection: 'row',
  },

  text2: {
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10,
  },
  text22: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10,
  },
  textplusprice: {
    fontSize: 20,
  },
  textplus: {
    fontSize: 15,
  },
  text3: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  button: {
    width: 30,
    margin: 5,
  },
  plus: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  plus1: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
    marginLeft:15,
  },
  plus12: {
    justifyContent: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 5,
  },
  product: {
    width: 170,
    height: 170,
    marginRight:20,
  },
  total: {
    flex:6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'center',
    },
  shipping: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'center',
    marginBottom:10,
  },
  bodybaba1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bodybaba: {
    flex: 6,
  },
  texttopay: {
    marginTop: 10,
    fontSize: 20,
  },
});
