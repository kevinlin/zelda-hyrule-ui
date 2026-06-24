import { BonusEffectIcon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 22,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const CombatBuffs = () => (
  <div style={stage}>
    <BonusEffectIcon icon="attackUp" arrow />
    <BonusEffectIcon icon="defenseUp" arrow />
    <BonusEffectIcon icon="criticalHit" />
    <BonusEffectIcon icon="durabilityUp" arrow />
    <BonusEffectIcon icon="longThrow" />
  </div>
)

export const Resistances = () => (
  <div style={stage}>
    <BonusEffectIcon icon="heatResist" />
    <BonusEffectIcon icon="coldResist" />
    <BonusEffectIcon icon="fireResist" />
    <BonusEffectIcon icon="electricResist" />
  </div>
)

export const Movement = () => (
  <div style={stage}>
    <BonusEffectIcon icon="speedUp" arrow />
    <BonusEffectIcon icon="climbSpeedUp" arrow />
    <BonusEffectIcon icon="swimSpeedUp" arrow />
    <BonusEffectIcon icon="quietUp" arrow />
  </div>
)

export const Vitals = () => (
  <div style={stage}>
    <BonusEffectIcon icon="bonusHeart" />
    <BonusEffectIcon icon="staminaUp" />
  </div>
)
