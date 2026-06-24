import { ModalTutorial } from 'zelda-hyrule-ui'

// ModalTutorial renders a position:fixed inset:0 overlay (covers the viewport).
// A tall dark stage gives the dimmed backdrop something to sit over in-card.
const stage = {
  position: 'relative',
  minHeight: 320,
  padding: 28,
  background: '#0a1628',
  overflow: 'hidden',
}

export const PickUp = () => (
  <div style={stage}>
    <ModalTutorial
      text="Press A to pick up items. Hold A to throw what you are carrying."
      continueLabel="Got it"
    />
  </div>
)

export const Cooking = () => (
  <div style={stage}>
    <ModalTutorial
      text="Drop ingredients into a cooking pot over an open flame to prepare meals and elixirs."
      continueLabel="Continue"
    />
  </div>
)
