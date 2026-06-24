import { SystemScreen } from 'zelda-hyrule-ui'

// Full-screen "System Settings" composition (Display / Audio / Controls groups).
// Self-backgrounding, 16/9.
const stage = { background: '#1a1a18', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <SystemScreen />
  </div>
)
