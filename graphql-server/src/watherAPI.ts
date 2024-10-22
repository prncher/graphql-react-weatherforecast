import Memcached from "memcached";
import { get, set } from "./cacheUtil.js";

interface ProbabilityOfPrecipitation {
  unitCode: string
  value?: number
}

interface Period {
  number: number 
  name: string
  startTime: string
  endTime: string
  isDaytime: boolean 
  temperature: number
  temperatureUnit: string
  temperatureTrend: string
  probabilityOfPrecipitation: ProbabilityOfPrecipitation
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Coordinates {
  x: number; // longitude
  y: number; // latitude
}

const getWeatherData = async (address:Address, context: { cache: Memcached }): Promise<Period[]> => {
  try {
    const {street,city,state} = {street:encodeURIComponent(address.street),
      city:encodeURIComponent(address.city),
      state:address.state}
    const key = `${street}${city}${state}`
    let periods = await get(context, key)
    if (periods){
      return periods;
    }
    let coordinates:Coordinates = {x:0,y:0}
    const base = "https://geocoding.geo.census.gov/geocoder/locations/address"
    const params="benchmark=4&format=json"
    const url = `${base}?street=${street}&city=${city}&state=${state}&${params}`
    let response = await fetch(url)
      if (response.status === 200){
        let {result} = await response.json()
        if (Array.isArray(result.addressMatches) && 
        result.addressMatches.length > 0){
            coordinates = result.addressMatches[0].coordinates
        }else{
          throw Error('Unable to get the latitude and longitude')
        }
      }else{
        throw Error('Unable to get the latitude and longitude')
      }

    const {y,x} = {y:coordinates.y.toFixed(4),x:coordinates.x.toFixed(4)}
    response = await fetch(`https://api.weather.gov/points/${y},${x}`, {
    });
    if (response.statusText === 'OK') {
      let jsonResult = await response.json()
      const forecastUrl = jsonResult.properties.forecast;
      response = await fetch(forecastUrl);
      if (response.statusText === 'OK') {
        jsonResult = await response.json()
        periods = jsonResult.properties.periods as Period[]
        await set(context, key, periods);
        return periods
      }
    } else {
      throw Error("Server Error")
    }
  }
  catch (e) {
    throw Error("Unexpected Error")
  }

  return []
}

export {getWeatherData}
export type { Period, Address}