import { SheikahAbility } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const Abilities = () => (
  <div style={stage}>
    <SheikahAbility ability="roundBomb" />
    <SheikahAbility ability="cubeBomb" />
    <SheikahAbility ability="magnesis" />
    <SheikahAbility ability="stasis" />
    <SheikahAbility ability="cryonis" />
    <SheikahAbility ability="camera" />
  </div>
)

export const PlusVariants = () => (
  <div style={stage}>
    <SheikahAbility ability="roundBomb" plus />
    <SheikahAbility ability="stasis" plus />
  </div>
)

export const Recharging = () => (
  <div style={stage}>
    <SheikahAbility ability="roundBomb" recharging />
    <SheikahAbility ability="cryonis" recharging />
  </div>
)
