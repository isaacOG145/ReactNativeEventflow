import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function PurpleButton({ children, onPress }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TouchableOpacity
            style={[
                styles.bt,
                styles.btnPurple,
                isHovered && styles.btnPurpleHover
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
        alignItems: 'center', // Equivalente a text-align en React Native
        justifyContent: 'center',
        width: '100%',
        padding: 4,
    },
    btnPurple: {
        backgroundColor: '#8005A3',
    },
    text: {
        color: '#FAFAFA',
        fontSize: 16,
    },
    // Agregar a tus estilos:
    btnPurpleHover: {
        backgroundColor: '#9125B0',
    },
});
