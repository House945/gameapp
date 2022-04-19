export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'X-RapidAPI-Key': $config.moviesApiKey,
      'X-RapidAPI-Host': $config.wheatherApiHost,
    },
  })

  // Set baseURL to something different

  api.setBaseURL('https://community-open-weather-map.p.rapidapi.com')

  const wheatherApi = {
    getWheatherForHubert: async (params) => {
      const endpoint = '/climate/month'
      const { data } = await api.get(endpoint, { params })
      return data
    },
  }

  // Inject to context as $api
  inject('wheatherApi', wheatherApi)
}
