import { QuickSelector } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const Weapons = () => (
  <div style={stage}>
    <QuickSelector type="weapons" />
  </div>
)

export const Bow = () => (
  <div style={stage}>
    <QuickSelector type="bow" />
  </div>
)
