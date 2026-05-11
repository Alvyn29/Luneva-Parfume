import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

export default function ProductCard({ item, navigation }) {

  const [favorite, setFavorite] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* CARD */}
      <View style={styles.card}>

        {/* IMAGE */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {item.name}
        </Text>

        <Text style={styles.price}>
          {item.price}
        </Text>

        {/* DETAIL BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Detail', {
              product: item,
            })
          }
        >
          <Text style={styles.buttonText}>
            View Detail
          </Text>
        </TouchableOpacity>

        {/* FAVORITE */}
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
        >
          <Text style={styles.favorite}>
            {favorite ? '❤️ Favorited' : '🤍 Favorite'}
          </Text>
        </TouchableOpacity>

      </View>

      {/* MODAL POPUP */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>

            <Image
              source={{ uri: item.image }}
              style={styles.modalImage}
            />

            <Text style={styles.modalTitle}>
              {item.name}
            </Text>

            <Text style={styles.modalPrice}>
              {item.price}
            </Text>

            <Text style={styles.modalDesc}>
              Premium fragrance with elegant and luxury aroma.
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>
                Close
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  card: {
    width: 170,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 12,
    marginRight: 15,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },

  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  price: {
    marginTop: 5,
    color: '#D4AF37',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  favorite: {
    marginTop: 10,
    textAlign: 'center',
  },

  /* ===== MODAL ===== */

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
  },

  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },

  modalPrice: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  modalDesc: {
    marginTop: 10,
    color: '#666',
    lineHeight: 22,
  },

  closeButton: {
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },

  closeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

});