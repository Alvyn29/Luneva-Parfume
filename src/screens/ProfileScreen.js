import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {

  // ===== STATE =====
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ===== PROFILE =====
  const [profileName, setProfileName] =
    useState('Luneva Member');

  const [profileImage, setProfileImage] =
    useState(
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    );

  // ===== PICK IMAGE =====
  const pickImage = async () => {

    const result =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        aspect: [1, 1],

        quality: 1,
      });

    if (!result.canceled) {

      setProfileImage(
        result.assets[0].uri
      );
    }
  };

  // ===== LOGIN =====
  const handleLogin = () => {

    if (!name || !email || !password) {

      Alert.alert(
        'Warning',
        'Please fill all form fields.'
      );

      return;
    }

    // UPDATE PROFILE NAME
    setProfileName(name);

    Alert.alert(
      'Success',
      'Welcome to Luneva Parfume ✨'
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* ===== HEADER ===== */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={pickImage}
        >

          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />

        </TouchableOpacity>

        <Text style={styles.changePhoto}>
          Change Photo
        </Text>

        <Text style={styles.name}>
          {profileName}
        </Text>

        <Text style={styles.subtitle}>
          Luxury Fragrance Experience
        </Text>

      </View>

      {/* ===== FORM ===== */}
      <View style={styles.formCard}>

        <Text style={styles.formTitle}>
          Member Login
        </Text>

        {/* NAME */}
        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#999"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* EMAIL */}
        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* PASSWORD */}
        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >

          <Text style={styles.buttonText}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

      {/* ===== MEMBERSHIP ===== */}
      <View style={styles.membershipCard}>

        <Text style={styles.membershipTitle}>
          Gold Membership ✨
        </Text>

        <Text style={styles.membershipText}>
          Get exclusive access to luxury perfume collections
          and premium member discounts.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  // ===== HEADER =====
  header: {
    alignItems: 'center',
    marginTop: 50,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#D4AF37',
  },

  changePhoto: {
    color: '#D4AF37',
    marginTop: 10,
    fontWeight: '600',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 15,
  },

  subtitle: {
    color: '#777',
    marginTop: 5,
  },

  // ===== FORM =====
  formCard: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 30,
    padding: 25,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },

  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 25,
  },

  label: {
    color: '#444',
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    color: '#111',
  },

  button: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // ===== MEMBERSHIP =====
  membershipCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginBottom: 40,
    borderRadius: 30,
    padding: 25,
  },

  membershipTitle: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: 'bold',
  },

  membershipText: {
    color: '#EEE',
    marginTop: 12,
    lineHeight: 24,
  },

});