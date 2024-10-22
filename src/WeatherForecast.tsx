import React from 'react'
import { Address, Period } from '../graphql-server/src/watherAPI'
import { Container, Header, Image, Inner, Outer, OuterContainer } from './styled';

const WeatherForecast = (props: { address: Address }) => {
  const [forecast, setForecast] = React.useState<Period[]>([]);

  // const [forecast, setForecast] = React.useState<Period[]>(() => {
  //   return JSON.parse('[{"name":"This Afternoon","startTime":"2024-10-18T16:00:00-04:00","endTime":"2024-10-18T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 71. North wind around 6 mph."},{"name":"Tonight","startTime":"2024-10-18T18:00:00-04:00","endTime":"2024-10-19T06:00:00-04:00","isDaytime":false,"temperature":45,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 45. North wind around 5 mph."},{"name":"Saturday","startTime":"2024-10-19T06:00:00-04:00","endTime":"2024-10-19T18:00:00-04:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 70. Northeast wind around 5 mph."},{"name":"Saturday Night","startTime":"2024-10-19T18:00:00-04:00","endTime":"2024-10-20T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"2 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 44. Southwest wind around 2 mph."},{"name":"Sunday","startTime":"2024-10-20T06:00:00-04:00","endTime":"2024-10-20T18:00:00-04:00","isDaytime":true,"temperature":73,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 73. Northwest wind around 3 mph."},{"name":"Sunday Night","startTime":"2024-10-20T18:00:00-04:00","endTime":"2024-10-21T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 47."},{"name":"Monday","startTime":"2024-10-21T06:00:00-04:00","endTime":"2024-10-21T18:00:00-04:00","isDaytime":true,"temperature":76,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 76."},{"name":"Monday Night","startTime":"2024-10-21T18:00:00-04:00","endTime":"2024-10-22T06:00:00-04:00","isDaytime":false,"temperature":51,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"3 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 51."},{"name":"Tuesday","startTime":"2024-10-22T06:00:00-04:00","endTime":"2024-10-22T18:00:00-04:00","isDaytime":true,"temperature":78,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"W","icon":"https://api.weather.gov/icons/land/day/skc?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 78."},{"name":"Tuesday Night","startTime":"2024-10-22T18:00:00-04:00","endTime":"2024-10-23T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 52."},{"name":"Wednesday","startTime":"2024-10-23T06:00:00-04:00","endTime":"2024-10-23T18:00:00-04:00","isDaytime":true,"temperature":77,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"6 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 77."},{"name":"Wednesday Night","startTime":"2024-10-23T18:00:00-04:00","endTime":"2024-10-24T06:00:00-04:00","isDaytime":false,"temperature":55,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 55."},{"name":"Thursday","startTime":"2024-10-24T06:00:00-04:00","endTime":"2024-10-24T18:00:00-04:00","isDaytime":true,"temperature":68,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"7 to 10 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 68."},{"name":"Thursday Night","startTime":"2024-10-24T18:00:00-04:00","endTime":"2024-10-25T06:00:00-04:00","isDaytime":false,"temperature":46,"temperatureUnit":"F","temperatureTrend":"","probabilityOfPrecipitation":{"unitCode":"wmoUnit:percent","value":null},"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 46."}]')
  // });
  React.useEffect(() => {
    //   return
    const { street, city, state } = props.address
    if (street === '' || city === '' || state === '') return
    const query = {
      query: `{
            periods(street: "${street}", city: "${city}", state: "${state}") {
                  name
    startTime
    endTime
    isDaytime
    temperature
    temperatureUnit
    temperatureTrend
    probabilityOfPrecipitation {
      unitCode
      value
    }
    windSpeed
    windDirection
    icon
    shortForecast
    detailedForecast
            }
          }
            `};
    const url = `http://localhost:4000/graphql`;
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      }).then(response => {
        response.json().then(data => {
          const { periods } = data.data;
          setForecast(periods || [])
        })
      },
        reject => {
          setForecast([])
        })
    }
    catch (e) {
      setForecast([])
      console.log(e)
    };
  }, [props.address])

  const getOuter = (f: Period) => {
    return <Outer key={f.startTime}>
      <Header>{f.name}</Header>
      <Image $image={f.icon} />
      <Inner>
        <div>Short Forecast: {f.shortForecast}</div>
        <div>Start: {new Date(f.startTime).toLocaleString()}</div>
        <div>End: {new Date(f.endTime).toLocaleString()}</div>
        <div>Temperature: {f.temperature}&deg;{f.temperatureUnit}</div>
        <div>Wind Speed: {f.windSpeed}</div>
        <div>Wind Direction: {f.windDirection}</div>
        <div>Detailed: {f.detailedForecast}</div>
      </Inner>
    </Outer>
  }
  return <OuterContainer>
    <Container>
      {forecast.map((f, i) => {
        return i % 2 === 0 ? getOuter(f) : null
      })}
    </Container>
    <Container>
      {forecast.map((f, i) => {
        return i % 2 !== 0 ? getOuter(f) : null
      })}
    </Container>
    {forecast.length === 0 && <>No forecast available</>}
  </OuterContainer>

}

export default WeatherForecast