import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';

import { parseFile } from 'music-metadata';
import { inspect } from 'util';
import Ionicons from '@expo/vector-icons/Ionicons';


/*async function requestStoragePermission() {
  const { status } = await MediaLibrary.requestPermissionsAsync(); // Expo 41+
  if (status === 'granted') {
    console.log('Permission de stockage accordée !');
  } else {
    console.log('Permission de stockage refusée.');
  }
} 

requestStoragePermission();
*/

type SongProps = ({actualSong : object})

const Song = ({actualSong} : SongProps) => (
  <View  style={style.song}>
          <Ionicons name='musical-note' color={'#706385'} size={24}/>

  <Text>
    { actualSong.filename}
  </Text>
</View>
)
 
export default function Home()
{
    const [songs, setSongs] = useState<object[]>([]);


async function requestPermission() {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission refusée');
    return;
  }
  console.log('Permission accordée');
}

async function getDownloads() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission refusée');
      return;
    }
  
    // Obtenir les fichiers du dossier Téléchargements
    const assets = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio, // Pour inclure tous les types de fichiers
    });
  
    console.log('Fichiers trouvés :', assets.assets[16]);
    setSongs(assets.assets);
    //getCovers(assets.assets[16].uri)

  }

  getDownloads();
  

requestPermission();

      
    return (
        <View>
           <Text style={style.header}>
            Vos chansons 
           </Text>
           <View>
           <Text>
           {songs.length > 0 ? `Home Miaou! ${songs[0].albumId}` : 'Chargement des chansons...'}
           </Text>
          
           <FlatList
        data={songs}
        renderItem={({item}) => <Song actualSong={item} />}
        keyExtractor={item => item.id}
      />

        </View>
        </View>
        
    )

}

const style = StyleSheet.create({
  header:{
     fontSize: 25,
    fontWeight: 'bold', 
    textAlign: 'center',
    margin: 20
  },
  song: {
    shadowOffset: {width:2,height: 4},
    borderRadius: 10,
    display: 'flex',
    
    justifyContent: 'center',
    height:60,
    backgroundColor: '#faf9f5',
    margin: 10,
    
  }
})