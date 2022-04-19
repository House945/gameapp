export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'X-RapidAPI-Key': $config.gamesApiKey,
      'X-RapidAPI-Host': $config.gamesApiHost,
    },
  })

  // Set baseURL to something different

  api.setBaseURL('https://free-to-play-games-database.p.rapidapi.com')

  const gamesApi = {
    getGames: async (params) => {
      const endpoint = '/api/games'
      const { data } = await api.get(endpoint, { params })
      return data
    },
  }

  // Inject to context as $api
  inject('gamesApi', gamesApi)
}
