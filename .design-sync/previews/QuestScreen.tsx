import { QuestScreen } from 'zelda-hyrule-ui'

// Full-screen "Adventure Log" composition: self-backgrounding, 16/9.
const stage = { background: '#1a1a18', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <QuestScreen />
  </div>
)
