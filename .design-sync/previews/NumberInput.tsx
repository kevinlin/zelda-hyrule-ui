import { NumberInput } from 'zelda-hyrule-ui'

// Static value states (up/down steppers are interactive; we show fixed values here).
const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const Single = () => (
  <div style={stage}>
    <NumberInput value={1} min={1} max={99} />
  </div>
)

export const MidRange = () => (
  <div style={stage}>
    <NumberInput value={12} min={1} max={99} />
  </div>
)

export const Max = () => (
  <div style={stage}>
    <NumberInput value={99} min={1} max={99} />
  </div>
)
