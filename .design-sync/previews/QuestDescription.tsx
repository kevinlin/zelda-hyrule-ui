import { QuestDescription } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 32,
  background: '#0a1628',
  width: 460,
}

export const MainQuest = () => (
  <div style={stage}>
    <QuestDescription
      title="Destroy Ganon"
      description="Calamity Ganon has gathered in Hyrule Castle. Find a way to break the seal and put an end to the Calamity once and for all."
      location="Hyrule Castle"
      npc="King Rhoam"
    />
  </div>
)

export const SideQuest = () => (
  <div style={stage}>
    <QuestDescription
      title="The Sheep Rustlers"
      description="Five of the Hateno sheep have wandered off. Round them up and guide them back to the pen before nightfall."
      location="Hateno Village"
      npc="Koyin"
    />
  </div>
)

export const Cleared = () => (
  <div style={stage}>
    <QuestDescription
      title="The Stolen Heirloom"
      description="The Sheikah heirloom was recovered from the thief hiding in Kakariko Village."
      location="Kakariko Village"
      npc="Dorian"
      cleared="Complete"
    />
  </div>
)
