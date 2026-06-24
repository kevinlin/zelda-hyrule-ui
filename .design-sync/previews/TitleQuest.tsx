import { TitleQuest } from 'zelda-hyrule-ui'

// Quest-start banner; questType drives the accent, complete shows the cleared state.
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  alignItems: 'center',
  padding: '44px 32px',
  background: '#0a1628',
  width: 560,
}

export const MainQuest = () => (
  <div style={stage}>
    <TitleQuest name="Destroy Ganon" questType="main" />
  </div>
)

export const SideQuest = () => (
  <div style={stage}>
    <TitleQuest name="The Hero's Cache" questType="side" />
  </div>
)

export const ShrineQuest = () => (
  <div style={stage}>
    <TitleQuest name="A Major Test of Strength" questType="shrine" />
  </div>
)

export const Completed = () => (
  <div style={stage}>
    <TitleQuest name="Find the Fairy Fountain" questType="side" complete />
  </div>
)
