import { DialogChoice } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  justifyContent: 'center',
  padding: 32,
  background: '#0a1628',
}

export const ThreeOptions = () => (
  <div style={stage}>
    <DialogChoice
      options={[
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Maybe later', value: 'later' },
      ]}
      selectedIndex={0}
    />
  </div>
)

export const SecondSelected = () => (
  <div style={stage}>
    <DialogChoice
      options={[
        { label: 'Buy', value: 'buy' },
        { label: 'Sell', value: 'sell' },
        { label: 'Leave', value: 'leave' },
      ]}
      selectedIndex={1}
    />
  </div>
)
