import { MapHeroLocation } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 56,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 56,
  background: '#0a1628',
}

export const WithVision = () => (
  <div style={stage}>
    <MapHeroLocation rotation={0} vision />
  </div>
)

export const Rotations = () => (
  <div style={stage}>
    <MapHeroLocation rotation={0} vision />
    <MapHeroLocation rotation={90} vision />
    <MapHeroLocation rotation={225} vision />
  </div>
)

export const NoVision = () => (
  <div style={stage}>
    <MapHeroLocation rotation={45} />
  </div>
)
