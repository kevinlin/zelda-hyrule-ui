import { ControllerButton } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 28,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 40,
  background: '#0a1628',
}

// The full Switch button set (the button-type axis).
export const Buttons = () => (
  <div style={stage}>
    <ControllerButton button="A" />
    <ControllerButton button="B" />
    <ControllerButton button="X" />
    <ControllerButton button="Y" />
    <ControllerButton button="L" />
    <ControllerButton button="R" />
    <ControllerButton button="ZL" />
    <ControllerButton button="ZR" />
    <ControllerButton button="Plus" />
    <ControllerButton button="Minus" />
  </div>
)

// With action labels, as used in HUD prompts.
export const WithLabels = () => (
  <div style={stage}>
    <ControllerButton button="A" label="Confirm" />
    <ControllerButton button="B" label="Back" />
    <ControllerButton button="X" label="Jump" />
    <ControllerButton button="Y" label="Attack" />
  </div>
)
