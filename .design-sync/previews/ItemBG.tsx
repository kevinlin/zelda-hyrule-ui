import { ItemBG } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 28,
  background: '#0a1628',
}

// Item-slot glyph stand-in (the DS ships no item-art exports)
const glyph = (label: string) => (
  <span style={{ fontSize: 34, lineHeight: 1, filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.6))' }}>{label}</span>
)

export const States = () => (
  <div style={stage}>
    <ItemBG state="empty" size={84} />
    <ItemBG state="filled" size={84}>{glyph('🗡️')}</ItemBG>
    <ItemBG state="selected" size={84}>{glyph('🏹')}</ItemBG>
    <ItemBG state="equipped" size={84}>{glyph('🛡️')}</ItemBG>
    <ItemBG state="sheikahSelect" size={84}>{glyph('💣')}</ItemBG>
  </div>
)

export const InventoryRow = () => (
  <div style={stage}>
    <ItemBG state="equipped" size={96}>{glyph('⚔️')}</ItemBG>
    <ItemBG state="filled" size={96}>{glyph('🍎')}</ItemBG>
    <ItemBG state="filled" size={96}>{glyph('🍄')}</ItemBG>
    <ItemBG state="selected" size={96}>{glyph('🗝️')}</ItemBG>
    <ItemBG state="empty" size={96} />
  </div>
)
