import axios from 'axios'

export default function (name, type) {
  const cmd = type === 'repo' ? '' : '/repos'
  return axios({
    url: `https://api.github.com/${type}s/${name}${cmd}`,
    method: 'get',
    params: {
      per_page: 1000,
      client_id: 'c4fce46f353ffdd7e307',
      client_secret: '2c8f578c3ee982b341d17d5076d26ac95252cd87'
    }
  })
}
