import { top100 } from '../utils/top-100-cities'
import { country_continent } from '../utils/country-by-continent'
import { country_code } from '../utils/country-by-code'
import { api } from '../services/unsplash-js'
import { Photos } from '../types/PhotoProps'

interface unsplashDataProps {
  continent: string
}

interface getDataProps {
  cities: Array<string[]>
  codes: Array<[string, string]>
}

function getData ({ cities, codes }: getDataProps) {
  let teste = {}

  let promise = cities.map(city => {
    const icon = codes.find(array1 => array1[1] === city[1])[0]

    return api.search
      .getPhotos({
        query: `${city[0]} ${city[1]}`,
        perPage: 1,
        orientation: 'landscape'
      })
      .then(result => {
        teste = {
          id: result.response.results[0].id,
          urls: result.response.results[0].urls,
          alt_description: result.response.results[0].alt_description,
          city: city[0],
          country: city[1],
          icon: `https://hatscripts.github.io/circle-flags/flags/${icon}.svg`
        }

        return teste

      })
      // .catch(err => console.log(err))
  })

  const data = Promise.all(promise)
    .then(results => {
      return results as Photos
    })

  return data
}

export function unsplashData ({ continent }: unsplashDataProps) {
  const countries = country_continent
    .filter(object1 => object1.continent === continent)
    .map(object2 => object2.country)

  const codes = Object.entries(country_code)

  const cities = top100
    .filter(array2 => countries.includes(array2[3]))
    .map(cidade => [cidade[2], cidade[3]])

  return getData({ cities, codes })
}
