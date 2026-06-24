import { SoundMeter } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Levels = () => (
  <div style={stage}>
    <SoundMeter level="low" />
    <SoundMeter level="high" />
  </div>
)

export const Large = () => (
  <div style={stage}>
    <SoundMeter level="low" size={56} />
    <SoundMeter level="high" size={56} />
  </div>
)
