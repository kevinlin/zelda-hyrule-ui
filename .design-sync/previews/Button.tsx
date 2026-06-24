import { Button } from 'zelda-hyrule-ui'

// BotW UI sits on dark/translucent panels — render on the game's navy backdrop
// so light text and the ghost variant are visible (the card body is white).
const stage = {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

export const Variants = () => (
  <div style={stage}>
    <Button variant="primary">Continue</Button>
    <Button variant="sheikah">Scan</Button>
    <Button variant="ghost">Back</Button>
    <Button variant="danger">Delete Save</Button>
  </div>
)

export const Sizes = () => (
  <div style={stage}>
    <Button variant="primary" size="small">Small</Button>
    <Button variant="primary" size="middle">Middle</Button>
    <Button variant="primary" size="large">Large</Button>
  </div>
)

export const States = () => (
  <div style={stage}>
    <Button variant="primary" loading>Saving…</Button>
    <Button variant="primary" disabled>Locked</Button>
  </div>
)
