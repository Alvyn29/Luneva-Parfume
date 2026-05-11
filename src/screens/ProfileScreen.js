import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* ===== HEADER ===== */}
      <View style={styles.header}>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          Luneva Customer
        </Text>

        <Text style={styles.email}>
          customer@luneva.com
        </Text>

      </View>

      {/* ===== MEMBERSHIP CARD ===== */}
      <View style={styles.membershipCard}>

        <Text style={styles.membershipLabel}>
          PREMIUM MEMBERSHIP
        </Text>

        <Text style={styles.membershipTitle}>
          Gold Member ✨
        </Text>

        <Text style={styles.membershipText}>
          Enjoy exclusive luxury perfume collections,
          special discounts, and premium services.
        </Text>

      </View>

      {/* ===== MENU ===== */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuItem}>

          <View style={styles.iconBox}>
            <Text style={styles.menuIcon}>🛍️</Text>
          </View>

          <Text style={styles.menuText}>
            Order History
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <View style={styles.iconBox}>
            <Text style={styles.menuIcon}>❤️</Text>
          </View>

          <Text style={styles.menuText}>
            Favorite Products
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <View style={styles.iconBox}>
            <Text style={styles.menuIcon}>📍</Text>
          </View>

          <Text style={styles.menuText}>
            Shipping Address
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>

          <View style={styles.iconBox}>
            <Text style={styles.menuIcon}>⚙️</Text>
          </View>

          <Text style={styles.menuText}>
            Settings
          </Text>

        </TouchableOpacity>

      </View>

      {/* ===== PROMO ===== */}
      <View style={styles.promoCard}>

        <Text style={styles.promoTitle}>
          Special Offer 🎁
        </Text>

        <Text style={styles.promoText}>
          Get 20% OFF for your next luxury fragrance purchase.
        </Text>

        <TouchableOpacity style={styles.promoButton}>

          <Text style={styles.promoButtonText}>
            Claim Now
          </Text>

        </TouchableOpacity>

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
    marginTop: 40,
    paddingBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#D4AF37',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 15,
  },

  email: {
    color: '#777',
    marginTop: 5,
    fontSize: 15,
  },

  membershipCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 28,
    padding: 25,
  },

  membershipLabel: {
    color: '#AAA',
    fontSize: 12,
    letterSpacing: 2,
  },

  membershipTitle: {
    color: '#D4AF37',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },

  membershipText: {
    color: '#EEE',
    marginTop: 12,
    lineHeight: 24,
    fontSize: 15,
  },

  menuContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  menuItem: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  iconBox: {
    width: 45,
    height: 45,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 15,
  },

  menuIcon: {
    fontSize: 20,
  },

  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },

  promoCard: {
    backgroundColor: '#D4AF37',
    margin: 20,
    borderRadius: 28,
    padding: 25,
    marginBottom: 40,
  },

  promoTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
  },

  promoText: {
    color: '#FFF',
    marginTop: 10,
    lineHeight: 24,
    fontSize: 15,
  },

  promoButton: {
    backgroundColor: '#111',
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 25,
    alignItems: 'center',
  },

  promoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

});