import { GameOverScreen } from 'zelda-hyrule-ui'

// Full-screen "Game Over" composition (red title + Continue / Load Save).
// Self-backgrounding, 16/9.
const stage = { background: '#0a0a09', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <GameOverScreen />
  </div>
)
