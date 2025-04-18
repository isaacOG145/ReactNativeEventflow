import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelectInputComponent({
  options = [],
  value = '',
  onChange = () => {},
  label = '',
  required = false,
  error = '',
  placeholder = 'Selecciona una opción'
}) {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.asterisk}>*</Text>}
        </Text>
      )}

      <View style={[styles.pickerWrapper, error && styles.pickerWrapperError]}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => onChange({ target: { value: itemValue } })}
          style={styles.picker}
        >
          <Picker.Item label={placeholder} value="" enabled={false} />
          {options.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#141414',
  },
  asterisk: {
    color: '#cc1212',
    fontSize: 20,
  },
  pickerWrapper: {
    backgroundColor: '#e5e7e9',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerWrapperError: {
    borderColor: 'red',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#141414',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
