import { SettingsToggle } from 'zelda-hyrule-ui'

// .toggleArea is a fixed 408px; the label takes the remaining flex space, so the
// container must be wide enough (≈760px) for labels like "Camera Sensitivity" to
// show without ellipsizing.
const stage = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  padding: 32,
  background: '#0a1628',
  width: 760,
}

// Two-option (ON/OFF) toggle, with the selected row highlighted.
export const TwoOptionSelected = () => (
  <div style={stage}>
    <SettingsToggle label="HUD Display" options={['ON', 'OFF']} value="ON" selected />
  </div>
)

// Two-option, unselected row.
export const TwoOption = () => (
  <div style={stage}>
    <SettingsToggle label="Pro HUD" options={['ON', 'OFF']} value="OFF" />
  </div>
)

// Multi-option toggle (◀ value ▶).
export const MultiOption = () => (
  <div style={stage}>
    <SettingsToggle label="Camera Sensitivity" options={['Low', 'Normal', 'High']} value="Normal" />
  </div>
)

// A settings panel: selected row plus neighbors.
export const Panel = () => (
  <div style={stage}>
    <SettingsToggle label="Motion Controls" options={['ON', 'OFF']} value="ON" selected />
    <SettingsToggle label="Vibration" options={['ON', 'OFF']} value="ON" />
    <SettingsToggle label="Text Language" options={['EN', 'JP', 'FR']} value="EN" />
  </div>
)
