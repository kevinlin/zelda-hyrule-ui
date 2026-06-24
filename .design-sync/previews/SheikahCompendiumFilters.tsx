import { SheikahCompendiumFilters } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: 32,
  background: '#0a1628',
  minWidth: 360,
}

export const Creatures = () => (
  <div style={stage}>
    <SheikahCompendiumFilters activeFilter="creatures" />
  </div>
)

export const Weapons = () => (
  <div style={stage}>
    <SheikahCompendiumFilters activeFilter="weapons" />
  </div>
)

export const Materials = () => (
  <div style={stage}>
    <SheikahCompendiumFilters activeFilter="materials" />
  </div>
)
