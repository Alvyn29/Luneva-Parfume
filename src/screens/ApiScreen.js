import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

import axios from 'axios';

export default function ApiScreen() {

  // GANTI DENGAN LINK MOCKAPI KAMU
  const API =
    'https://6a12f33078d0434e0d5da850.mockapi.io/Parfume';

  // ===== STATE =====
  const [data, setData] =
    useState([]);

  const [name, setName] =
    useState('');

  const [price, setPrice] =
    useState('');

  const [image, setImage] =
    useState('');

  const [editId, setEditId] =
    useState(null);

  // ===== GET =====
  const getData = async () => {

    try {

      const response =
        await axios.get(API);

      setData(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // ===== LOAD =====
  useEffect(() => {

    getData();

  }, []);

  // ===== ADD =====
  const addData = async () => {

    try {

      await axios.post(API, {
        name,
        price,
        image,
      });

      getData();

      setName('');
      setPrice('');
      setImage('');

    } catch (error) {

      console.log(error);
    }
  };

  // ===== EDIT =====
  const editData = (item) => {

    setEditId(item.id);

    setName(item.name);

    setPrice(item.price);

    setImage(item.image);
  };

  // ===== UPDATE =====
  const updateData = async () => {

    try {

      await axios.put(
        `${API}/${editId}`,
        {
          name,
          price,
          image,
        }
      );

      getData();

      setEditId(null);

      setName('');
      setPrice('');
      setImage('');

    } catch (error) {

      console.log(error);
    }
  };

  // ===== DELETE =====
  const deleteData = async (id) => {

    try {

      await axios.delete(
        `${API}/${id}`
      );

      getData();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Luneva Parfume
      </Text>

      {/* INPUT */}
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        placeholder="Image URL"
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={
          editId
            ? updateData
            : addData
        }
      >

        <Text style={styles.buttonText}>
          {editId ? 'Update' : 'Add'}
        </Text>

      </TouchableOpacity>

      {/* DATA */}
      <FlatList
        data={data}
        keyExtractor={(item) =>
          item.id.toString()
        }

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />

            <View style={styles.content}>

              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

              <View style={styles.row}>

                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    editData(item)
                  }
                >

                  <Text style={styles.actionText}>
                    Edit
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() =>
                    deleteData(item.id)
                  }
                >

                  <Text style={styles.actionText}>
                    Delete
                  </Text>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },

  image: {
    width: 100,
    height: 100,
  },

  content: {
    flex: 1,
    padding: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    color: '#D4AF37',
    marginTop: 5,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
  },

  editButton: {
    backgroundColor: '#D4AF37',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: '#C0392B',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

});