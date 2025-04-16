import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const InputComponent = ({ 
  type = "text",
  value = "",
  onChangeText = () => {},
  label = "",
  required = false,
  error = "",
  maxLength = null,
  placeholder = "",
  disabled = false,
  containerStyle = {},
  inputStyle = {}
}) => {
  const [charCount, setCharCount] = useState(value.length);
  const [showMaxLengthAlert, setShowMaxLengthAlert] = useState(false);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleTextChange = (text) => {
    if (maxLength && text.length > maxLength) {
      setShowMaxLengthAlert(true);
      setTimeout(() => setShowMaxLengthAlert(false), 3000);
      return;
    }
    onChangeText(text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : {},
          disabled ? styles.inputDisabled : {},
          inputStyle
        ]}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={type === "password"}
        editable={!disabled}
        maxLength={maxLength}
        keyboardType={
          type === "email" ? "email-address" :
          type === "number" ? "numeric" :
          "default"
        }
      />
      
      {(maxLength && !error) && (
        <Text style={styles.charCount}>
          {charCount}/{maxLength}
        </Text>
      )}
      
      {showMaxLengthAlert && (
        <Text style={styles.alertText}>
          Máximo {maxLength} caracteres permitidos
        </Text>
      )}
      
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#141414',
    fontWeight: 'normal',
  },
  required: {
    color: 'red',
  },
  input: {
    width: '100%',
    padding: 12,
    color: '#141414',
    backgroundColor: '#e5e7e9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  inputDisabled: {
    opacity: 0.6,
  },
  charCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 4,
  },
  alertText: {
    fontSize: 12,
    color: 'orange',
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});

// Validación de props
InputComponent.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};

export default InputComponent;