import { SheikahRune } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: 40,
  background: '#0a1628',
}

export const Magnesis = () => (
  <div style={stage}>
    <SheikahRune activeRune="magnesis" />
  </div>
)

export const Stasis = () => (
  <div style={stage}>
    <SheikahRune activeRune="stasis" />
  </div>
)

export const Cryonis = () => (
  <div style={stage}>
    <SheikahRune activeRune="cryonis" />
  </div>
)

export const Camera = () => (
  <div style={stage}>
    <SheikahRune activeRune="camera" />
  </div>
)
