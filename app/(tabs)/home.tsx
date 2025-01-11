import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';

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
  <View>
  <Text>
  g,bcjgc
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
  
    console.log('Fichiers trouvés :', assets.assets[2]);
    setSongs(assets.assets);

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
  }
})