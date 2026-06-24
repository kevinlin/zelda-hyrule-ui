import { QuestTypeIcon } from 'zelda-hyrule-ui'

// type axis drives the icon glyph + glow color. Each badge carries its own glow.
const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const AllTypes = () => (
  <div style={stage}>
    <QuestTypeIcon type="main" size={64} />
    <QuestTypeIcon type="side" size={64} />
    <QuestTypeIcon type="shrine" size={64} />
    <QuestTypeIcon type="memory" size={64} />
  </div>
)

export const MainLarge = () => (
  <div style={stage}>
    <QuestTypeIcon type="main" size={96} />
  </div>
)
