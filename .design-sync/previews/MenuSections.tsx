import { MenuSections } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 28,
  background: '#0a1628',
  width: 560,
}

export const Weapons = () => (
  <div style={stage}>
    <MenuSections activeSection="weapons" />
  </div>
)

export const Clothing = () => (
  <div style={stage}>
    <MenuSections activeSection="clothing" />
  </div>
)

export const Food = () => (
  <div style={stage}>
    <MenuSections activeSection="food" />
  </div>
)
