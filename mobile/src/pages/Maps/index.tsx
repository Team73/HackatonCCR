import React, { useState, useEffect } from 'react';
import { View, Alert, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import { IPlaces, IRegion } from './IMaps';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

import api from '../../services/api';

const Map: React.FC = () => {
  const [places, setPlaces] = useState<IPlaces[]>();
  const [origin, setOrigin] = useState<IRegion>();
  const [destination, setDestination] = useState<IRegion>();
  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDZ1GcP-SAfxYoub4hJase8jK5xtBruujs';

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Precisamos da sua permissão',
          message: 'Para melhorar o uso do aplicativo ative a localização!',
          buttonPositive: 'Sim',
          buttonNegative: 'Não',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      Alert.alert(
        'Erro em obter permissão!',
        'Não foi possível obter sua localização.',
      );
    }
  };

  const loadPlaces = async () => {
    const response = await api.get('/places');

    setPlaces(response.data);
  };

  const handleDirections = () => {
    if (originText.trim() && destinationText.trim()) {
      Geocoder.init(GOOGLE_MAPS_APIKEY);

      Geocoder.from(originText).then((response) => {
        var location = response.results[0].geometry.location;

        setOrigin({ latitude: location.lat, longitude: location.lng });
      });
      Geocoder.from(destinationText).then((response) => {
        var location = response.results[0].geometry.location;

        setDestination({ latitude: location.lat, longitude: location.lng });
      });
    } else {
      Alert.alert('Campos vazios', 'Preencha os campos Destino/Origem!');
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setOrigin({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        Alert.alert('Localização', 'Não foi possível obter sua localização');
      },
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
    );
  };

  useEffect(() => {
    const isGrant = requestLocationPermission();

    if (isGrant) {
      getLocation();
    }
    loadPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#000"
        />

        {places?.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}>
            <Callout>
              <Text>{place.name}</Text>
            </Callout>
          </Marker>
        ))}

        {origin ? (
          <Marker coordinate={origin}>
            <Callout>
              <Text>Posição atual</Text>
            </Callout>
          </Marker>
        ) : null}
      </MapView>

      <View style={styles.barSearch}>
        <Input onChangeText={setOriginText} label="Origem" />
        <Input onChangeText={setDestinationText} label="Destino" />
        <Button onPress={handleDirections}>Pesquisar</Button>
      </View>
    </View>
  );
};

export default Map;
