import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Colors, fontSizes, Spacing} from '../kernel/Styles';

export default function BlueButton({ children, onPress }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TouchableOpacity
            style={[
                styles.bt,
                styles.btnBlue,
                isHovered && styles.btnBlueHover
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            onMouseEnter={() => setIsHovered(true)} // Solo funciona en web
            onMouseLeave={() => setIsHovered(false)} // Solo funciona en web
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    bt: {
        borderRadius: 12,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        padding: Spacing.medium,
    },
    btnBlue: {
        backgroundColor: Colors.blue,
    },
    text: {
        color: Colors.textLight,
        fontSize: fontSizes.normal,
    },
    // Agregar a tus estilos:
    btnBlueHover: {
        backgroundColor: Colors.blueHover,
    },
});
