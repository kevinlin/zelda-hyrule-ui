import { RupeeType } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const AllTypes = () => (
  <div style={stage}>
    <RupeeType type="green" />
    <RupeeType type="blue" />
    <RupeeType type="red" />
    <RupeeType type="purple" />
    <RupeeType type="silver" />
    <RupeeType type="gold" />
  </div>
)

export const Large = () => (
  <div style={stage}>
    <RupeeType type="gold" size={64} />
    <RupeeType type="silver" size={64} />
  </div>
)
