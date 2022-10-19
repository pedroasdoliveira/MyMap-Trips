import { type } from 'os'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Places = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Places[]
}

const MapComponent = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          ></Marker>
        )
      })}
    </MapContainer>
  )
}

export default MapComponent
