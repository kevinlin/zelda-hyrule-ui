import { AttackDefenseValues } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

// Type axis: attack (sword icon) vs. defense (shield icon).
export const Types = () => (
  <div style={stage}>
    <AttackDefenseValues type="attack" value={32} />
    <AttackDefenseValues type="defense" value={18} />
  </div>
)

// Modifier axis: normal / bonus (buffed) / penalty (debuffed).
export const Modifiers = () => (
  <div style={stage}>
    <AttackDefenseValues type="attack" value={32} modifier="normal" />
    <AttackDefenseValues type="attack" value={47} modifier="bonus" />
    <AttackDefenseValues type="attack" value={21} modifier="penalty" />
  </div>
)
