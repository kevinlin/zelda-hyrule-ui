import { SheikahSymbol } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

export const Filled = () => (
  <div style={stage}>
    <SheikahSymbol size={96} outline={false} />
  </div>
)

export const Outline = () => (
  <div style={stage}>
    <SheikahSymbol size={96} outline />
  </div>
)

export const Sizes = () => (
  <div style={stage}>
    <SheikahSymbol size={48} outline={false} />
    <SheikahSymbol size={72} outline={false} />
    <SheikahSymbol size={96} outline={false} />
  </div>
)
