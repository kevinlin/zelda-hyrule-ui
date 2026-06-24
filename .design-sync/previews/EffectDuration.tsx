import { EffectDuration, BonusEffectIcon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'flex-start',
  padding: 32,
  background: '#0a1628',
}

export const AttackUp = () => (
  <div style={stage}>
    <EffectDuration name="Attack Up" timeRemaining="2:30" />
  </div>
)

export const WithIcon = () => (
  <div style={stage}>
    <EffectDuration
      name="Heat Resistance"
      timeRemaining="4:12"
      icon={<BonusEffectIcon icon="heatResist" size={24} />}
    />
  </div>
)

export const Effects = () => (
  <div style={stage}>
    <EffectDuration name="Speed Up" timeRemaining="1:05" />
    <EffectDuration name="Defense Up" timeRemaining="3:48" />
    <EffectDuration name="Stealth Up" timeRemaining="0:22" />
  </div>
)
