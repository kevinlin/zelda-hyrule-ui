import { TitleLocation } from 'zelda-hyrule-ui'

// Brand font (Hylia Serif) location banner on the game's navy backdrop.
const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 32px',
  background: '#0a1628',
}

export const Village = () => (
  <div style={stage}>
    <TitleLocation name="Hateno Village" />
  </div>
)

export const Region = () => (
  <div style={stage}>
    <TitleLocation name="Lanayru Wetlands" />
  </div>
)
