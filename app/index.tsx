import { Text, View, StyleSheet, Image } from 'react-native';
import { Link, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import Button from '@/components/Button';

const heroImage = require('@/assets/images/cute-girl.png');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image 
      style={styles.stretch}
      source=
        { heroImage }
      ></Image>
      <View style={styles.button}>
      <Button theme="primary" label =""   >
          <Link href="/home" style={styles.text}>
                    <Text>Go to home screen!</Text>
                  </Link>
        </Button>

      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
   
    marginBlockStart: 20
  }

})