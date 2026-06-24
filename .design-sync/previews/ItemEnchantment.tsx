import { ItemEnchantment } from 'zelda-hyrule-ui'

// Three diamonds fill by quality (0-3). Scale up so the diamonds read on navy.
const stage = {
  display: 'flex',
  gap: 40,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 44,
  background: '#0a1628',
}

const blow = { transform: 'scale(2.4)', display: 'inline-flex' }

// Sweep the quality axis 0 -> 3.
export const Quality = () => (
  <div style={stage}>
    <span style={blow}><ItemEnchantment quality={0} /></span>
    <span style={blow}><ItemEnchantment quality={1} /></span>
    <span style={blow}><ItemEnchantment quality={2} /></span>
    <span style={blow}><ItemEnchantment quality={3} /></span>
  </div>
)
