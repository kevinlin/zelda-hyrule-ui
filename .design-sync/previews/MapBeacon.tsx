import { MapBeacon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  padding: '56px 40px',
  background: '#0a1628',
}

export const AllColors = () => (
  <div style={stage}>
    <MapBeacon color="red" />
    <MapBeacon color="blue" />
    <MapBeacon color="yellow" />
    <MapBeacon color="green" />
    <MapBeacon color="pink" />
  </div>
)

export const WithFlare = () => (
  <div style={stage}>
    <MapBeacon color="blue" flare />
    <MapBeacon color="green" flare />
  </div>
)

export const NoFlare = () => (
  <div style={stage}>
    <MapBeacon color="red" />
    <MapBeacon color="yellow" />
  </div>
)
