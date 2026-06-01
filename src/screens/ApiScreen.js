import React, {
  useEffect,
  useState,
} from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import { supabase }
from '../config/supabase';

export default function ApiScreen() {

  const [data, setData] =
    useState([]);

  const [name, setName] =
    useState('');

  const [price, setPrice] =
    useState('');

  const [image, setImage] =
    useState('');

  const [category, setCategory] =
    useState('');

  const [description, setDescription] =
    useState('');

  const [stock, setStock] =
    useState('');

  const [volume, setVolume] =
    useState('');

  const [rating, setRating] =
    useState('');

  const [editId, setEditId] =
    useState(null);

  useEffect(() => {

    getData();

  }, []);

  // ===== GET =====
  const getData = async () => {

    const { data, error } =
      await supabase
        .from('parfumes')
        .select('*')
        .order('id');

    if (error) {

      console.log(error);

    } else {

      setData(data);

    }

  };

  // ===== ADD =====
  const addData = async () => {

    const { error } =
      await supabase
        .from('parfumes')
        .insert([
          {
            name,
            price,
            image,
            category,
            description,
            stock: parseInt(stock),
            volume,
            rating: parseFloat(rating),
            
          },
        ]);

    if (error) {

      console.log(error);

    } else {

      getData();

      setName('');
      setPrice('');
      setImage('');
      setCategory('');
      setDescription('');
      setStock('');
      setVolume('');
      setRating('');

    }

  };

  // ===== EDIT =====
  const editData = (item) => {

    setEditId(item.id);

    setName(item.name);

    setPrice(item.price);

    setImage(item.image);

    setCategory(item.category);

    setDescription(
      item.description
    );

    setStock(
      item.stock?.toString()
    );

    setVolume(
      item.volume
    );

    setRating(
      item.rating?.toString()
    );

  };
    // ===== UPDATE =====
  const updateData = async () => {

    const { error } =
      await supabase
        .from('parfumes')
        .update({
          name,
          price,
          image,
          category,
          description,
          stock: parseInt(stock),
          volume,
          rating: parseFloat(rating),
        })
        .eq('id', editId);

    if (error) {

      console.log(error);

    } else {

      getData();

      setEditId(null);

      setName('');
      setPrice('');
      setImage('');
      setCategory('');
      setDescription('');
      setStock('');
      setVolume('');
      setRating('');

    }

  };

  // ===== DELETE =====
  const deleteData = async (id) => {

    const { error } =
      await supabase
        .from('parfumes')
        .delete()
        .eq('id', id);

    if (error) {

      console.log(error);

    } else {

      getData();

    }

  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Luneva Collection
      </Text>

      <TextInput
        placeholder="Product Name"
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

      <TextInput
        placeholder="Category"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Stock"
        style={styles.input}
        value={stock}
        onChangeText={setStock}
      />

      <TextInput
        placeholder="Volume"
        style={styles.input}
        value={volume}
        onChangeText={setVolume}
      />

      <TextInput
        placeholder="Rating"
        style={styles.input}
        value={rating}
        onChangeText={setRating}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={
          editId
            ? updateData
            : addData
        }
      >
        <Text style={styles.buttonText}>
          {editId
            ? 'Update Product'
            : 'Add Product'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image
              source={{
                uri:
                  item.image &&
                  item.image.length > 0
                    ? item.image
                    : 'https://via.placeholder.com/300',
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

              <Text>
                Category: {item.category}
              </Text>

              <Text>
                Stock: {item.stock}
              </Text>

              <Text>
                Volume: {item.volume}
              </Text>

              <Text>
                Rating: ⭐ {item.rating}
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

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 12,
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
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },

  image: {
    width: 110,
    height: 110,
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
    fontWeight: 'bold',
    marginVertical: 5,
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
  },

  editButton: {
    backgroundColor: '#D4AF37',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: '#C0392B',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
  },

  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

});