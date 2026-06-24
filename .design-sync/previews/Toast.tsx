import { Toast } from 'zelda-hyrule-ui'

// Toast is position:relative and renders in flow; duration=0 keeps it visible.
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'flex-start',
  padding: 32,
  background: '#0a1628',
}

export const SaveComplete = () => (
  <div style={stage}>
    <Toast visible message="Game Saved" duration={0} onClose={() => {}} />
  </div>
)

export const ItemGained = () => (
  <div style={stage}>
    <Toast visible message="Added Hylian Shield to inventory" duration={0} onClose={() => {}} />
  </div>
)

export const Warning = () => (
  <div style={stage}>
    <Toast visible message="Your weapon is about to break!" duration={0} onClose={() => {}} />
  </div>
)
