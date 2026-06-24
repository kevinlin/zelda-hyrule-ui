import { QuestListItem } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 24,
  background: '#0a1628',
  width: 380,
}

export const MainQuest = () => (
  <div style={stage}>
    <QuestListItem title="Destroy Ganon" location="Hyrule Castle" questType="main" state="marked" />
  </div>
)

export const SideQuest = () => (
  <div style={stage}>
    <QuestListItem title="Robbie's Research" location="Akkala Ancient Tech Lab" questType="side" state="default" />
  </div>
)

export const ShrineQuest = () => (
  <div style={stage}>
    <QuestListItem title="The Stolen Heirloom" location="Kakariko Village" questType="shrine" state="completed" />
  </div>
)
