import { Image } from 'expo-image';
import { Platform, StyleSheet, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ImageList() {
  const router = useRouter();
  return (
  <ThemedView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingTop: 50 }}>
      {[...Array(20).keys()].map((i) => (
        <ThemedView key={i} style={{ margin: 16, alignItems: 'center' }}>
          <Pressable
            onPress={() => {
              // You can use your navigation method here, e.g. with Expo Router:
              router.push({ pathname: '/details', params: { id: i.toString() } });
            }}
          >
            <Image
              source={{ uri: `https://picsum.photos/seed/${i}/300/200` }}
              style={{ width: 300, height: 200, borderRadius: 12 }}
              contentFit="cover"
            />
          </Pressable>
          <ThemedText style={{ marginTop: 8 }}>Image #{i + 1}</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
