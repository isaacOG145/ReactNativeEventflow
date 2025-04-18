import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

const BirthDateComponent = ({
  value = '',
  onChange = () => {},
  label = '',
  required = false,
  error = '',
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [localError, setLocalError] = useState('');

  const currentDate = value ? new Date(value) : null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');

    if (!selectedDate) return;

    if (selectedDate > today) {
      setLocalError('La fecha no puede ser superior a hoy');
      return;
    }

    setLocalError('');
    onChange({ target: { value: format(selectedDate, 'yyyy-MM-dd') } });
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.asterisk}>*</Text>}
        </Text>
      )}

      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={[
          styles.dateButton,
          (localError || error) && styles.dateButtonError,
        ]}
      >
        <Text style={styles.dateText}>
          {value ? format(new Date(value), 'yyyy-MM-dd') : 'Selecciona una fecha'}
        </Text>
      </TouchableOpacity>

      {(localError || error) && (
        <Text style={styles.errorText}>{localError || error}</Text>
      )}

      {showPicker && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          value={currentDate || new Date('2000-01-01')}
          onChange={handleDateChange}
          maximumDate={today}
          minimumDate={new Date('1910-01-01')}
        />
      )}
    </View>
  );
};

export default BirthDateComponent;

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
  dateButton: {
    backgroundColor: '#e5e7e9',
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  dateButtonError: {
    borderColor: 'red',
  },
  dateText: {
    fontSize: 18,
    color: '#141414',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
