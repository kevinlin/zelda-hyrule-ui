import { Modal } from 'zelda-hyrule-ui'

// Modal portals to document.body and renders a position:fixed inset:0 overlay
// when open. Composed open here so the dialog + dimmed mask are captured.
const stage = {
  position: 'relative',
  minHeight: 340,
  padding: 28,
  background: '#0a1628',
  overflow: 'hidden',
}

export const Confirm = () => (
  <div style={stage}>
    <Modal open title="Travel to Hateno Village?" onClose={() => {}} onOk={() => {}}>
      <p style={{ margin: 0, color: '#e9e1d1' }}>
        Fast-traveling will end your current activity. Any unsaved progress at this
        location will be lost.
      </p>
    </Modal>
  </div>
)

export const WithList = () => (
  <div style={stage}>
    <Modal open title="Discard Weapon" width={420} onClose={() => {}} onOk={() => {}}>
      <div style={{ color: '#e9e1d1' }}>
        <p style={{ marginTop: 0 }}>You are about to drop the following item:</p>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Royal Broadsword — Attack 36</li>
          <li>Durability: 12 / 28</li>
        </ul>
      </div>
    </Modal>
  </div>
)
