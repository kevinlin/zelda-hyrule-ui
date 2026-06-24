import { ShopPriceQuantity } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  padding: 36,
  background: '#0a1628',
}

export const Default = () => (
  <div style={stage}>
    <ShopPriceQuantity price={120} quantity={5} />
  </div>
)

export const SingleItem = () => (
  <div style={stage}>
    <ShopPriceQuantity price={3000} quantity={1} />
  </div>
)
