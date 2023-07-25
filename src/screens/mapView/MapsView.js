import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MapsCardsFlatListView from '../components/MapsCardsFlatListView';
import dummyArray from '../../dummyArray/dummyArray'

const MapsView = ({ item }) => {

  const { cardsContainer, container, flatList, map, markerContainer, markerDot, SelectedMarkerImage, UnSelectedMarkerImage, openClosedView, selectedImageDot,selectedImageView } = styles
  // console.log('=========>>>',cardsDetailsError)
  const cardsView = ({ item }) => {
    return <MapsCardsFlatListView item={item} />;
  };
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [mapImage, setMapImage] = useState(null);
  const [locationId, setLocationId] = useState()

  let coordinatesArray = []

  dummyArray.map((item) => {
    // console.log('Getting Items ====>>>>',item)
    coordinatesArray.push({
      coordinates: {
        'latitude': item.lat,
        'longitude': item.lon
      },
      'imageUri': item.thumbnail,
      'id': item.id,
      'isopen': item.is_open

    })
  })

  const onViewableItemsChangedRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const lati = viewableItems[0].item.lat;
      const longi = viewableItems[0].item.lon;
      const thumbnail = viewableItems[0].item.thumbnail;
      const id = viewableItems[0].item.id;
      setMapImage(thumbnail);
      setLat(lati);
      setLong(longi);
      setLocationId(id)
    }
  });



  const currentLocation = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={container}>
      <MapView style={map} region={currentLocation}>
        {
          coordinatesArray.map((item) => {
            return (
              <Marker coordinate={item.coordinates} >
                {
                  item.id == locationId ?
                    <View style={selectedImageView}>
                      <View>
                        <View style={{ justifyContent: 'center' }}>
                          <Image source={{ uri: item.imageUri }} style={SelectedMarkerImage} />
                          <View style={openClosedView}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>{item.isopen ? 'Opened' : 'Closed'}</Text>
                          </View>
                        </View>
                        <View style={selectedImageDot} />
                      </View>
                    </View>
                    :
                    <View style={markerContainer}>
                      <Image source={{ uri: item.imageUri }} style={UnSelectedMarkerImage} />
                      <View style={markerDot} />
                    </View>
                }

              </Marker>
            )
          })
        }
      </MapView>

      <View style={cardsContainer}>
        <View>
          <FlatList
            data={dummyArray}
            renderItem={cardsView}
            style={flatList}
            onViewableItemsChanged={onViewableItemsChangedRef.current}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            horizontal
            showsHorizontalScrollIndicator={false}

          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    alignItems: 'center',
  },
  SelectedMarkerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },
  UnSelectedMarkerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  markerDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 3,
  },
  cardsContainer: {
    // backgroundColor: '#FFFFFF',
    // height: '20%',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10
  },
  flatList: {
    marginVertical: RFPercentage(1),
  },
  openClosedView: {
    backgroundColor: '#000000aa',
    padding: 3,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10
  },
  selectedImageDot: {
    backgroundColor: 'black',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 3,
    alignSelf: 'center'
  },
  selectedImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

