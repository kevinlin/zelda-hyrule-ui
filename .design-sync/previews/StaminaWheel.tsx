import { StaminaWheel } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Full = () => (
  <div style={stage}>
    <StaminaWheel value={1} size={80} />
  </div>
)

export const Partial = () => (
  <div style={stage}>
    <StaminaWheel value={0.6} size={80} />
  </div>
)

export const CriticalLow = () => (
  <div style={stage}>
    <StaminaWheel value={0.15} size={80} />
  </div>
)

export const BonusStamina = () => (
  <div style={stage}>
    <StaminaWheel value={0.8} size={80} bonus />
  </div>
)
