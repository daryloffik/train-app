import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;  
  children?: React.ReactNode; // Permet d'accepter les enfants
};

export default function Button({ label, theme, onPress, children }: Props) {
  return (
    <Pressable 
      style={[
        styles.button, 
        theme === 'primary' && styles.primaryButton,
      ]}
      onPress={onPress}
    >
      {children ? children : <Text style={styles.text}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingHorizontal: 26,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },
});
