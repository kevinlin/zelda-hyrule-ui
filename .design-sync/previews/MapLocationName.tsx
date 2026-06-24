import { MapLocationName } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'flex-start',
  padding: 32,
  background: '#0a1628',
  width: 360,
}

export const Sizes = () => (
  <div style={stage}>
    <MapLocationName name="Hateno Village" size="small" />
    <MapLocationName name="Zora's Domain" size="medium" />
    <MapLocationName name="Hyrule Castle" size="large" />
  </div>
)

export const Large = () => (
  <div style={stage}>
    <MapLocationName name="Akkala Highlands" size="large" />
  </div>
)
