import { StatsStack } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Types = () => (
  <div style={stage}>
    <StatsStack type="weapon" value={32} />
    <StatsStack type="armor" value={24} />
    <StatsStack type="shield" value={18} />
    <StatsStack type="healing" value={5} />
  </div>
)

export const WithComparison = () => (
  <div style={stage}>
    <StatsStack type="weapon" value={40} comparison={32} />
    <StatsStack type="armor" value={24} comparison={28} />
  </div>
)

export const WithTrait = () => (
  <div style={stage}>
    <StatsStack type="weapon" value={58} trait="Attack Up" />
    <StatsStack type="shield" value={70} trait="Guard Up" />
  </div>
)
