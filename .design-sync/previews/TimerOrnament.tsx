import { TimerOrnament } from 'zelda-hyrule-ui'

// 24x10 timer flourish; enlarge via scale wrapper so it reads on navy.
const stage = {
  display: 'flex',
  gap: 48,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 44,
  background: '#0a1628',
}

const blow = { transform: 'scale(3)', display: 'inline-flex' }

export const Sides = () => (
  <div style={stage}>
    <span style={blow}><TimerOrnament side="left" /></span>
    <span style={blow}><TimerOrnament side="right" /></span>
  </div>
)
