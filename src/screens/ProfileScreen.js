import React, {
  useState,
  useEffect,
} from 'react';

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

import * as ImagePicker
from 'expo-image-picker';

import { supabase }
from '../config/supabase';

export default function ProfileScreen() {

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [profileName,
    setProfileName] =
    useState(
      'Luneva Member'
    );

  const [profileImage,
    setProfileImage] =
    useState(
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    );

  const [totalProduct,
    setTotalProduct] =
    useState(0);

  const [totalStock,
    setTotalStock] =
    useState(0);

  const [averageRating,
    setAverageRating] =
    useState(0);

  useEffect(() => {

    getStatistics();

  }, []);

  const getStatistics =
    async () => {

      const {
        data,
        error,
      } = await supabase
        .from('parfumes')
        .select('*');

      if (error) {

        console.log(error);

        return;
      }

      setTotalProduct(
        data.length
      );

      const stockSum =
        data.reduce(
          (sum, item) =>
            sum +
            Number(
              item.stock || 0
            ),
          0
        );

      setTotalStock(
        stockSum
      );

      const ratingAvg =
        data.length > 0
          ? (
              data.reduce(
                (sum, item) =>
                  sum +
                  Number(
                    item.rating || 0
                  ),
                0
              ) /
              data.length
            ).toFixed(1)
          : 0;

      setAverageRating(
        ratingAvg
      );

    };

  const pickImage =
    async () => {

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

  const handleLogin =
    () => {

      if (
        !name ||
        !email ||
        !password
      ) {

        Alert.alert(
          'Warning',
          'Please fill all form fields.'
        );

        return;
      }

      setProfileName(
        name
      );

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

      <View style={styles.formCard}>

        <Text style={styles.formTitle}>
          Member Login
        </Text>

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >

          <Text style={styles.buttonText}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.statsCard}>

        <Text style={styles.statsTitle}>
          Collection Statistics
        </Text>

        <View style={styles.statRow}>

          <View style={styles.statBox}>

            <Text style={styles.statValue}>
              {totalProduct}
            </Text>

            <Text style={styles.statLabel}>
              Products
            </Text>

          </View>

          <View style={styles.statBox}>

            <Text style={styles.statValue}>
              {totalStock}
            </Text>

            <Text style={styles.statLabel}>
              Stock
            </Text>

          </View>

          <View style={styles.statBox}>

            <Text style={styles.statValue}>
              ⭐ {averageRating}
            </Text>

            <Text style={styles.statLabel}>
              Rating
            </Text>

          </View>

        </View>

      </View>

      <View style={styles.membershipCard}>

        <Text style={styles.membershipTitle}>
          Gold Membership ✨
        </Text>

        <Text style={styles.membershipText}>
          Get exclusive access to luxury perfume collections and premium member discounts.
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
    marginBottom: 25,
  },

  label: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#444',
  },

  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  statsCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 25,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },

  statsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    alignItems: 'center',
  },

  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4AF37',
  },

  statLabel: {
    marginTop: 5,
    color: '#666',
  },

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