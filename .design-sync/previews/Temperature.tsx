import { Temperature } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const AllLevels = () => (
  <div style={stage}>
    <Temperature value="cold" />
    <Temperature value="regular" />
    <Temperature value="hot" />
  </div>
)

export const Large = () => (
  <div style={stage}>
    <Temperature value="cold" size={64} />
    <Temperature value="hot" size={64} />
  </div>
)
