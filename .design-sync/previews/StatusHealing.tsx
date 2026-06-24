import { StatusHealing } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 36,
  background: '#0a1628',
}

const col = { ...stage, flexDirection: 'column', alignItems: 'flex-start', gap: 18 }
const blow = { transform: 'scale(1.6)', transformOrigin: 'left center', display: 'inline-flex' }

// Heart-count axis: red hearts grow with recovery amount.
export const HeartCounts = () => (
  <div style={col}>
    <span style={blow}><StatusHealing type="1Hearts" /></span>
    <span style={blow}><StatusHealing type="3Hearts" /></span>
    <span style={blow}><StatusHealing type="5Hearts" /></span>
    <span style={blow}><StatusHealing type="5+Hearts" /></span>
  </div>
)

// Special types: full recovery (hearts + plus), bonus (yellow), stamina (green ring).
export const SpecialTypes = () => (
  <div style={col}>
    <span style={blow}><StatusHealing type="fullRecovery" /></span>
    <span style={blow}><StatusHealing type="bonusHearts" /></span>
    <span style={blow}><StatusHealing type="stamina" /></span>
  </div>
)
