import { HorseSpur } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Types = () => (
  <div style={stage}>
    <HorseSpur type="normal" />
    <HorseSpur type="ancient" />
    <HorseSpur type="endura" />
  </div>
)

export const Used = () => (
  <div style={stage}>
    <HorseSpur type="normal" used />
    <HorseSpur type="ancient" used />
  </div>
)
