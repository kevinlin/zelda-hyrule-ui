import { WeatherIcon } from 'zelda-hyrule-ui'

const stage = {
  display: 'flex',
  gap: 32,
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: 32,
  background: '#0a1628',
}

export const AllWeather = () => (
  <div style={stage}>
    <WeatherIcon weather="clear" />
    <WeatherIcon weather="cloudy" />
    <WeatherIcon weather="rain" />
    <WeatherIcon weather="storm" />
  </div>
)

export const Glowing = () => (
  <div style={stage}>
    <WeatherIcon weather="clear" glowing />
    <WeatherIcon weather="storm" glowing />
  </div>
)

export const Large = () => (
  <div style={stage}>
    <WeatherIcon weather="rain" size={56} />
    <WeatherIcon weather="cloudy" size={56} />
  </div>
)
