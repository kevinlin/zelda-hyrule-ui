import { LoadingScreen } from 'zelda-hyrule-ui'

// Full-screen loading composition (beast icons, heart spinner, tip text).
// Self-backgrounding, 16/9.
const stage = { background: '#0d0d0c', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <LoadingScreen />
  </div>
)
