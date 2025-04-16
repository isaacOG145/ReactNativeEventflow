import React from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView,
  Dimensions,
  Platform 
} from 'react-native';
import { Colors, fontSizes, Spacing } from '../kernel/Styles';
import BlueButton from '../components/BlueButton';
import PurpleButton from '../components/PurpleButton';
import Carousel from 'react-native-reanimated-carousel';

export default function ActivityCard({
  activity,
  mobileLabel,
  onPressBlue,
  onPressPurple
}) {
  const { width: screenWidth } = Dimensions.get('window');

  return (
    <View style={styles.card}>
      {/* Carrusel de imágenes con flechas */}
      {activity.imageUrls?.length > 0 && (
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={screenWidth * 0.8}
            height={200}
            autoPlay={true}
            data={activity.imageUrls}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={styles.carouselImage}
                resizeMode="cover"
              />
            )}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
          />
        </View>
      )}

      <View style={styles.cardContent}>
        {/* Título */}
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {activity.name}
        </Text>

        {/* Etiqueta móvil específica */}
        {mobileLabel && (
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{mobileLabel}</Text>
          </View>
        )}

        {/* Información específica para talleres */}
        {activity.typeActivity === 'WORKSHOP' && (
          <>
            {activity.fromActivity && (
              <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
                Evento: <Text style={styles.infoBold}>{activity.fromActivity.name}</Text>
              </Text>
            )}
            {activity.quota && (
              <Text style={styles.infoText}>
                Cupo: <Text style={styles.infoBold}>{activity.quota} personas</Text>
              </Text>
            )}
          </>
        )}

        {/* Descripción */}
        <ScrollView 
          style={styles.descriptionContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.descriptionText}>{activity.description}</Text>
        </ScrollView>

        {/* Botones */}
        <View style={styles.buttonsContainer}>
          {onPressBlue && (
            <View style={styles.buttonSpacing}>
              <BlueButton onPress={onPressBlue}>
                {activity.typeActivity === 'WORKSHOP' ? 'Inscribirse' : 'Ver detalles'}
              </BlueButton>
            </View>
          )}
          
          {onPressPurple && (
            <PurpleButton onPress={onPressPurple}>
              Compartir
            </PurpleButton>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Platform.select({
      ios: '90%',
      android: '90%',
      default: '80%'
    }),
    borderRadius: 12,
    backgroundColor: Colors.cardBackground,
    marginVertical: Spacing.medium,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
    paddingTop: Spacing.small,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  cardContent: {
    padding: Spacing.large,
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Spacing.small,
  },
  labelContainer: {
    backgroundColor: Colors.lightPurple,
    padding: Spacing.small,
    borderRadius: 6,
    marginBottom: Spacing.medium,
    alignSelf: 'flex-start',
  },
  labelText: {
    color: Colors.purple,
    fontSize: fontSizes.small,
    fontWeight: '600',
  },
  infoText: {
    fontSize: fontSizes.small,
    color: Colors.textSecondary,
    marginBottom: Spacing.small,
  },
  infoBold: {
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  descriptionContainer: {
    maxHeight: 100,
    marginBottom: Spacing.medium,
  },
  descriptionText: {
    fontSize: fontSizes.medium,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  buttonsContainer: {
    marginTop: Spacing.medium,
  },
  buttonSpacing: {
    marginBottom: Spacing.medium,
  }
});