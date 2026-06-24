import { SheikahMapScreen } from 'zelda-hyrule-ui'

// Full-screen Sheikah Slate map composition (map grid, icons, cursor, panels).
// Self-backgrounding (teal navy), 16/9.
const stage = { background: '#0f1a1e', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <SheikahMapScreen />
  </div>
)
