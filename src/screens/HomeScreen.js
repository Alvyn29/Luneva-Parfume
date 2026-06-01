import React, {
  useRef,
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import { SafeAreaView }
from 'react-native-safe-area-context';

import { supabase }
from '../config/supabase';

import ProductCard
from '../components/ProductCard';

export default function HomeScreen({
  navigation,
}) {

  const [supabaseProducts,
    setSupabaseProducts] =
    useState([]);

  const getProducts =
    async () => {

      const {
        data,
        error,
      } = await supabase
        .from('parfumes')
        .select('*');

      if (error) {

        console.log(error);

      } else {

        setSupabaseProducts(
          data
        );

      }

    };

  useEffect(() => {

    getProducts();

  }, []);

  useFocusEffect(

    React.useCallback(() => {

      getProducts();

    }, [])

  );

  const scrollY =
    useRef(
      new Animated.Value(0)
    ).current;

  const logoScale =
    scrollY.interpolate({
      inputRange: [0, 120],
      outputRange: [1, 0.8],
      extrapolate: 'clamp',
    });

  const taglineOpacity =
    scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  const bannerOpacity =
    scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0.3],
      extrapolate: 'clamp',
    });

  const bannerTranslate =
    scrollY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, -20],
      extrapolate: 'clamp',
    });

  const defaultProducts = [

    {
      id: 'default1',
      name: 'Luneva Rose',
      price: 'Rp 350K',
      image:
        'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800',
    },

    {
      id: 'default2',
      name: 'Luneva Oud',
      price: 'Rp 500K',
      image:
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800',
    },

    {
      id: 'default3',
      name: 'Luneva Breeze',
      price: 'Rp 300K',
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800',
    },

    {
      id: 'default4',
      name: 'Luneva Gold',
      price: 'Rp 450K',
      image:
        'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800',
    },

    {
      id: 'default5',
      name: 'Luneva Bloom',
      price: 'Rp 400K',
      image:
        'https://images.unsplash.com/photo-1593487568720-92097fb460fb?q=80&w=1170&auto=format&fit=crop',
    },

  ];

  const products = [

    ...defaultProducts,

    ...supabaseProducts.map(
      item => ({

        id:
          item.id.toString(),

        name:
          item.name,

        price:
          item.price,

        image:
          item.image,

        category:
          item.category,

        description:
          item.description,

        stock:
          item.stock,

        volume:
          item.volume,

        rating:
          item.rating,

      })
    ),

  ];
    return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Animated.Text
          style={[
            styles.brand,
            {
              transform: [
                {
                  scale:
                    logoScale,
                },
              ],
            },
          ]}
        >
          LUNEVA
        </Animated.Text>

        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity:
                taglineOpacity,
            },
          ]}
        >
          Luxury Fragrance Collection
        </Animated.Text>

      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingTop: 140,
          paddingBottom: 30,
        }}

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}

        scrollEventThrottle={16}
      >

        <Animated.Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200',
          }}

          style={[
            styles.banner,
            {
              opacity:
                bannerOpacity,

              transform: [
                {
                  translateY:
                    bannerTranslate,
                },
              ],
            },
          ]}
        />

        <Text
          style={
            styles.sectionTitle
          }
        >
          Best Seller
        </Text>

        <Animated.ScrollView
          horizontal

          showsHorizontalScrollIndicator={
            false
          }

          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 10,
          }}
        >

          {products.map(
            (item) => (

              <ProductCard
                key={item.id}
                item={item}
                navigation={
                  navigation
                }
              />

            )
          )}

        </Animated.ScrollView>

      </Animated.ScrollView>

    </SafeAreaView>
  );

}

const styles =
StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:
      '#F8F8F8',
  },

  header: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,

    zIndex: 999,

    backgroundColor:
      'rgba(255,255,255,0.97)',

    paddingTop: 45,
    paddingBottom: 18,

    alignItems: 'center',

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 10,
  },

  brand: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 6,
    color: '#111',
  },

  tagline: {
    color: '#888',
    marginTop: 5,
    fontSize: 13,
    letterSpacing: 1,
  },

  banner: {
    width: '90%',
    height: 240,
    borderRadius: 30,
    alignSelf: 'center',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 20,
    color: '#111',
  },

});