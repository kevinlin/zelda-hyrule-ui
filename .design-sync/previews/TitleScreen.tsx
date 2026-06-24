import { TitleScreen } from 'zelda-hyrule-ui'

// Full-screen title menu (Logo, Continue / New Game / Options).
// Self-backgrounding, 16/9.
const stage = { background: '#0d0d0c', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <TitleScreen />
  </div>
)
