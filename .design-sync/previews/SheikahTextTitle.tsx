import { SheikahTextTitle } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  padding: 40,
  background: '#0a1628',
  width: 420,
}

export const WithDescription = () => (
  <div style={stage}>
    <SheikahTextTitle title="Hyrule Compendium" description="Creatures, monsters, materials and equipment" />
  </div>
)

export const TitleOnly = () => (
  <div style={stage}>
    <SheikahTextTitle title="Sheikah Slate" />
  </div>
)
