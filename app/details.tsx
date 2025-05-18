import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  // Get the image id from the route parameters
  const { id } = useLocalSearchParams<{ id: string }>();

  // Example: You would fetch image details using the id here.
  // For demonstration, we'll just show the id and a placeholder image.
  // Replace this with your actual image fetching logic.
  const imageUrl = `https://picsum.photos/id/${id}/400/300`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Details</Text>
      <Text style={styles.label}>Image ID: {id}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginTop: 8,
  },
});