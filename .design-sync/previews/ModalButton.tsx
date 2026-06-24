import { ModalButton } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

export const Default = () => (
  <div style={stage}>
    <ModalButton>Cancel</ModalButton>
    <ModalButton>Drop Item</ModalButton>
  </div>
)

export const Selected = () => (
  <div style={stage}>
    <ModalButton selected>Confirm</ModalButton>
    <ModalButton selected>Equip</ModalButton>
  </div>
)

export const Pair = () => (
  <div style={stage}>
    <ModalButton>Cancel</ModalButton>
    <ModalButton selected>Confirm</ModalButton>
  </div>
)
