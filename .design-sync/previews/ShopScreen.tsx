import { ShopScreen } from 'zelda-hyrule-ui'

// Full-screen "General Store" composition (item list + detail + price area).
// Self-backgrounding, 16/9.
const stage = { background: '#1a1a18', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <ShopScreen />
  </div>
)
