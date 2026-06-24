import { DialogFloating } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  alignItems: 'flex-start',
  padding: 40,
  background: '#0a1628',
  width: 480,
}

export const DialogBubble = () => (
  <div style={stage}>
    <DialogFloating text="You found me!" type="dialog" />
  </div>
)

export const NameTag = () => (
  <div style={stage}>
    <DialogFloating text="Korok" type="name" />
  </div>
)
