import React from "react"
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import { View ,Text} from "react-native"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const DummyPage =()=>
{
  return(
    <>
   <View>
            <View style={{ padding: 2 }}>
                            <GooglePlacesAutocomplete
                                placeholder='Search'
                                fetchDetails={true}
                                onPress={(data, details = null) => {
                                    let tempMapRegion = state.mapRegion;
                                    tempMapRegion.latitude = details.geometry.location.lat;
                                    tempMapRegion.longitude = details.geometry.location.lng;
                                    map.animateToRegion(this.newRegion(tempMapRegion));
                                    setState({ address: data.description })

                                }}
                                query={{
                                    key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                                    language: 'en',
                                }}
                            />
                        </View>
                        <MapView
                            provider={this.props.provider}
                            ref={ref => { this.map = ref; }}
                            mapType={MAP_TYPES.TERRAIN}
                            initialRegion={this.state.mapRegion}
                            onRegionChangeComplete={(e) => { this.onRegionChange(e) }}
                            style={{ height: width, width: width, marginTop: -5 }}
                        />
                            <Marker draggable
                                coordinate={this.state.mapRegion}
                                onDragEnd={(e) => {
                                    let tempMapRegion = this.state.mapRegion;
                                    tempMapRegion.latitude = e.nativeEvent.coordinate.latitude
                                    tempMapRegion.longitude = e.nativeEvent.coordinate.longitude
                                    this.map.animateToRegion(this.newRegion(tempMapRegion));
                                    // this.setState({ mapRegion: tempMapRegion })
                                }}
                            />

   </View>
  
    </>
  )
}

export default DummyPage