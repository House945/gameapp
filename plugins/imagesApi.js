export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({})

  // Set baseURL to something different

  api.setBaseURL('https://picsum.photos')

  const imagesApi = {
    getImagesForTbz: async (params) => {
      const endpoint = '/v2/list?page=2&limit=5'
      const { data } = await api.get(endpoint, { params })
      return data
    },
  }

  // Inject to context as $api
  inject('imagesApi', imagesApi)
}
