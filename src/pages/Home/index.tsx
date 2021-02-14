import React, {
  useContext,
  useEffect,
  useState
} from 'react'

import { WindowContext } from '../../context'

import Building from '../../components/Building'
import ToggleButton from '../../components/ToggleButton'

import { convertDateToApiFormat } from '../../utils/convertDateToApiFormat'
import { convertHourToBrazilianTimeZone } from '../../utils/convertHourToBrazilianTimeZone'
import { convertTimeToPMorAM } from '../../utils/convertTimeToPMorAM'
import { convertDateToCompare } from '../../utils/convertDateToCompare'
import { checkIfIsDayOrNight } from '../../utils/checkIfIsDayOrNight'

import api from '../../api'

import {
  Container,
  Title,
  ButtonContainer,
  CircuitParagraph
} from './styles'

const Home: React.FC = () => {
  const { isAllOn, setIsAllOn } = useContext(WindowContext)

  const [hours, setHours] = useState(0)
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [isTheSunDown, setIsTheSunDown] = useState(false)
  const [initialLocation, setInitialLocation] = useState({
    initialLatitude: 0,
    initialLongitude: 0,
  })

  const latitude = initialLocation.initialLatitude
  const longitude = initialLocation.initialLongitude

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setInitialLocation({
        initialLatitude: latitude,
        initialLongitude: longitude,
      })
    })
  }, [])

  useEffect(() => {
    // reference: https://stackoverflow.com/questions/27117730/how-to-compare-time-with-am-pm-in-javascript
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    setHours(hours)

    const currentTimeCorrectFormat = convertTimeToPMorAM(hours, minutes, seconds)
    const isAmOrPm = currentTimeCorrectFormat.includes('AM') ? 'AM' : 'PM'

    const dateToCompare = convertDateToCompare(date.getMonth(), date.getDate(), date.getFullYear())

    let currentDateToCompare = `${dateToCompare} ${currentTimeCorrectFormat}`
    let sunsetToCompare = `${dateToCompare} ${sunset}`
    let sunriseToCompare = `${dateToCompare} ${sunrise}`

    const nowTime = new Date(currentDateToCompare).getTime()
    const sunsetTime = new Date(sunsetToCompare).getTime()
    const sunriseTime = new Date(sunriseToCompare).getTime()

    if (sunset !== '' && sunrise !== '') {
      if (checkIfIsDayOrNight(nowTime, sunsetTime, sunriseTime, isAmOrPm))
        setIsTheSunDown(true)
      else
        setIsTheSunDown(false)
    }
  }, [hours, sunrise, sunset])

  useEffect(() => {
    const date = new Date()
    const newDate = convertDateToApiFormat(date.getDate(), date.getMonth() + 1, date.getFullYear())
    if (latitude !== 0 && longitude !== 0) {

      fetch(`${api}?lat=${latitude}&lng=${longitude}&date=${newDate}`, {
        method: 'GET'
      })
        .then(response => {
          response.json()
            .then(data => {
              const { sunrise } = data.results
              const { sunset } = data.results
              const brazilianSunriseHour = convertHourToBrazilianTimeZone(sunrise)
              const brazilianSunsetHour = convertHourToBrazilianTimeZone(sunset)
              setSunrise(brazilianSunriseHour)
              setSunset(brazilianSunsetHour)
            })
        })
        .catch(error => {
          console.log(error)
        })

    }
  }, [latitude, longitude])

  function handleCircuitBreaker() {
    setIsAllOn(!isAllOn)
  }

  return (
    <Container theme={isTheSunDown} >
      <Title>AFTERSALE Building</Title>
      <ButtonContainer>
        <CircuitParagraph>Circuit Breaker</CircuitParagraph>
        <ToggleButton onChange={handleCircuitBreaker} />
      </ButtonContainer>
      <Building />
    </Container>
  )
}

export default Home