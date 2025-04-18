import React from 'react';
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
import { formatDate, formatTime } from '../utils/dateUtils';
import BlueButton from '../components/BlueButton';
import PurpleButton from '../components/PurpleButton';
import Carousel from 'react-native-reanimated-carousel';

export default function ActivityCard({
    activity,
    onPressBlue,
    onPressPurple,
    textBlue,
    textPurple
}) {
    const { width: screenWidth } = Dimensions.get('window');

    return (
        <View style={styles.card}>
            {activity.imageUrls?.length > 0 && (
                <View style={styles.carouselContainer}>
                    <Carousel
                        loop
                        width={screenWidth * 1}
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
                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {activity.name}
                </Text>

                {activity.typeActivity === "EVENT" ? (
                    <View style={[styles.badge, styles.backgroundViolet]}>
                        <Text style={styles.badgeText}>Fecha: {activity.date}</Text>
                    </View>
                ) : (
                    <>
                        <View style={[styles.badge, styles.backgroundPurple]}>
                            <Text style={styles.badgeText}>Evento asociado: {activity.associatedEvent}</Text>
                        </View>

                        <View style={styles.rowContainer}>

                            <View style={[styles.badge, styles.backgroundViolet]}>
                                <Text style={styles.badgeText}>Hora: {formatTime(activity.time)}</Text>
                            </View>
                            <View style={[styles.badge,styles.backgroundBlue]}>
                                <Text style={styles.badgeText}>Cupo: {activity.totalQuota}</Text>
                            </View>
                            {activity.availableQuota != 0 ? (
                                <View style={[styles.badge,styles.backgroundGreen]}>
                                    <Text style={styles.badgeText}>Disponible: {activity.availableQuota}</Text>
                                </View>
                            ) : (
                                <View style={[styles.badge,styles.backgroundRed]}>
                                    <Text style={styles.badgeText}> Lleno </Text>
                                </View>
                            )

                            }


                        </View>
                    </>
                )}

                {activity.speaker && (
                    <Text style={styles.textBold}>Ponente: {activity.speaker}</Text>
                )}


                <ScrollView
                    style={styles.descriptionContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.descriptionText}>{activity.description}</Text>
                </ScrollView>

                <View style={styles.buttonsContainer}>
                    {onPressBlue && (
                        <View style={styles.buttonSpacing}>
                            <BlueButton onPress={onPressBlue}>
                                {textBlue}
                            </BlueButton>
                        </View>
                    )}

                    {onPressPurple && (
                        <PurpleButton onPress={onPressPurple}>
                            {textPurple}
                        </PurpleButton>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
    },
    card: {
        width: '90%',
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
    badge: {
        borderRadius: 12,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginVertical: 4,
        marginRight: 12,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundViolet: {
        backgroundColor: Colors.violet
    },
    backgroundPurple: {
        backgroundColor: Colors.purple
    },
    backgroundBlue: {
        backgroundColor: Colors.blue
    },
    backgroundGreen: {
        backgroundColor: Colors.green
    },
    backgroundRed: {
        backgroundColor: Colors.red
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: fontSizes.normal
    },
    descriptionContainer: {
        height: 'auto',
        marginBottom: Spacing.medium,
    },
    descriptionText: {
        fontSize: fontSizes.normal,
        color: Colors.textSecondary,
        lineHeight: 20,
    },
    buttonsContainer: {
        marginTop: Spacing.medium,
    },
    buttonSpacing: {
        marginBottom: Spacing.medium,
    },
});
