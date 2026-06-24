import { Sensor } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Active = () => (
  <div style={stage}>
    <Sensor active size={50} />
    <Sensor active plus size={50} />
  </div>
)

export const Inactive = () => (
  <div style={stage}>
    <Sensor size={50} />
    <Sensor plus size={50} />
  </div>
)
