import { QuestNotification } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  alignItems: 'flex-start',
  padding: 40,
  background: '#0a1628',
  width: 360,
}

export const WithLabel = () => (
  <div style={stage}>
    <QuestNotification showLabel label="New Quest Available" />
  </div>
)

export const NpcLabel = () => (
  <div style={stage}>
    <QuestNotification showLabel label="Impa" />
  </div>
)

export const MarkerOnly = () => (
  <div style={stage}>
    <QuestNotification />
  </div>
)
