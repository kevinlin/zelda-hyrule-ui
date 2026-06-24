import { ShopListItem } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 32,
  background: '#0a1628',
  width: 380,
}

export const ItemList = () => (
  <div style={stage}>
    <ShopListItem name="Hylian Shield" price={3000} />
    <ShopListItem name="Soldier's Bow" price={120} />
    <ShopListItem name="Hearty Truffle" price={24} />
  </div>
)

export const Hovered = () => (
  <div style={stage}>
    <ShopListItem name="Ancient Arrow" price={90} hovered />
  </div>
)
