import { MapIcon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const AllTypes = () => (
  <div style={stage}>
    <MapIcon icon="shrine" size={48} />
    <MapIcon icon="tower" size={48} />
    <MapIcon icon="lab" size={48} />
    <MapIcon icon="resurrection" size={48} />
  </div>
)

export const Shrine = () => (
  <div style={stage}>
    <MapIcon icon="shrine" size={64} />
  </div>
)

export const Tower = () => (
  <div style={stage}>
    <MapIcon icon="tower" size={64} />
  </div>
)
