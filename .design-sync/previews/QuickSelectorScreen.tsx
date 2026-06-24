import { QuickSelectorScreen } from 'zelda-hyrule-ui'

// This screen is a translucent OVERLAY: its container has no background of its
// own, only an inner rgba(0,0,0,0.75) backdrop meant to dim the game behind
// it. On the white card body the overlay would wash out, so paint the game's
// navy behind it — the dim + blurred selector wheel then reads correctly.
const stage = { background: '#0a1628', padding: 0 }

export const Default = () => (
  <div style={stage}>
    <QuickSelectorScreen />
  </div>
)
