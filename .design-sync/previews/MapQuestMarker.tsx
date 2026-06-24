import { MapQuestMarker } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const Default = () => (
  <div style={stage}>
    <MapQuestMarker size={64} />
  </div>
)

export const Pulsing = () => (
  <div style={stage}>
    <MapQuestMarker pulse size={64} />
  </div>
)
