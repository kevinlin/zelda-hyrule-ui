import { SheikahCompendiumEntry } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

const creature = (emoji: string) => (
  <span style={{ fontSize: 44, lineHeight: 1 }}>{emoji}</span>
)

export const Revealed = () => (
  <div style={stage}>
    <SheikahCompendiumEntry revealed number={1} image={creature('🐗')} />
  </div>
)

export const Unknown = () => (
  <div style={stage}>
    <SheikahCompendiumEntry number={42} />
  </div>
)

export const Hovered = () => (
  <div style={stage}>
    <SheikahCompendiumEntry revealed hovered number={7} image={creature('🦌')} />
  </div>
)

export const Grid = () => (
  <div style={stage}>
    <SheikahCompendiumEntry revealed number={1} image={creature('🐗')} />
    <SheikahCompendiumEntry revealed number={2} image={creature('🦅')} />
    <SheikahCompendiumEntry number={3} />
    <SheikahCompendiumEntry revealed number={4} image={creature('🐎')} />
  </div>
)
