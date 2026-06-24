import { HealthBar } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'flex-start',
  padding: 32,
  background: '#0a1628',
}

export const FullHealth = () => (
  <div style={stage}>
    <HealthBar current={13} max={13} />
  </div>
)

export const Damaged = () => (
  <div style={stage}>
    <HealthBar current={8} max={13} />
  </div>
)

export const BonusHearts = () => (
  <div style={stage}>
    <HealthBar current={10} max={13} bonus={3} />
  </div>
)

export const CriticalLow = () => (
  <div style={stage}>
    <HealthBar current={2} max={13} />
  </div>
)
