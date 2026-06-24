import { Starburst } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 48,
  background: '#0a1628',
}

// Two-layer starburst special-effect glyph at a few sizes.
export const Sizes = () => (
  <div style={stage}>
    <Starburst size={80} />
    <Starburst size={140} />
    <Starburst size={200} />
  </div>
)
