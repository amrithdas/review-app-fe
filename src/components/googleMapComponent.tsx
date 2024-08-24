import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

interface RestaurantData {
  name: string;
  address: string;
  description: string;
  contact_info: string;
  tags: string[];
  cafe: boolean;
  bakery: boolean;
  website: string;
  location: string; // This should contain latitude and longitude as a string "lat,lng"
  reviews: number;
  rating: string;
  opening_time: string;
  closing_time: string;
}

interface GoogleMapProps {
    restaurantData: RestaurantData[];
    center: { lat: number; lng: number };
  }

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

const GoogleMapComponent:  React.FC<GoogleMapProps> = ({ restaurantData, center }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDRl2V_KIzWoXQ8wBeK7xDWbKcfE2MtV-g',
    libraries: ['places'], // Add any libraries you need here
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantData | null>(null);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="hidden lg:block lg:w-1/5 bg-red-500 p-1 text-black">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {restaurantData.map((item, index) => {
          const [lat, lng] = item.location.split(',').map(Number); // Assuming location is "lat,lng"
          return (
            <Marker
              key={index}
              position={{ lat, lng }}
              title={item.name}
              label={{ text: (index + 1).toString(), color: "white" }}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 15,
                fillColor: "#EA5231",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "white",
              }}
              onClick={() => setSelectedRestaurant(item)}
            />
          );
        })}
        {selectedRestaurant && (
          <InfoWindow
            position={{
              lat: Number(selectedRestaurant.location.split(',')[0]),
              lng: Number(selectedRestaurant.location.split(',')[1]),
            }}
            onCloseClick={() => setSelectedRestaurant(null)}
          >
            <div>
              <h2 className="font-bold">{selectedRestaurant.name}</h2>
              <p>{selectedRestaurant.description}</p>
              <p>{selectedRestaurant.address}</p>
              <p>Rating: {selectedRestaurant.rating} ({selectedRestaurant.reviews} reviews)</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
