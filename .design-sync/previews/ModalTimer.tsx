import { ModalTimer } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Normal = () => (
  <div style={stage}>
    <ModalTimer time="2:30" />
  </div>
)

export const Urgent = () => (
  <div style={stage}>
    <ModalTimer time="0:15" red />
  </div>
)

export const Both = () => (
  <div style={stage}>
    <ModalTimer time="4:00" />
    <ModalTimer time="0:09" red />
  </div>
)
