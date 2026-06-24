import { RupeeCounter } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'flex-start',
  padding: 32,
  background: '#0a1628',
}

export const Amounts = () => (
  <div style={stage}>
    <RupeeCounter amount={0} />
    <RupeeCounter amount={999} />
    <RupeeCounter amount={13878} />
  </div>
)

export const Colors = () => (
  <div style={stage}>
    <RupeeCounter amount={20} color="green" />
    <RupeeCounter amount={100} color="silver" />
    <RupeeCounter amount={300} color="gold" />
  </div>
)
