import axios from 'axios'
import apicalypse from 'apicalypse'

const clientId = process.env.VUE_APP_CLIENTID
const secret = process.env.VUE_APP_SECRET
let token = ''

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    authenticateGameDB()
  }
  return error
})


const authenticateGameDB = function () {
  axios.post('https://id.twitch.tv/oauth2/token', null, {
    params: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: secret
    }
  }).then((response) => {
    token = response.data.access_token
  })
}

authenticateGameDB()

const getGamesByName = async function (gameName) {
  return await apicalypse({
    method: 'post',
    baseURL: process.env.VUE_APP_IGDB_API,
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${token}`
    },
    queryMethod: 'body'
  })
  .fields(['name', 'url', 'cover', 'summary', 'storyline'])
  .search(gameName)
  .where('version_parent = null')
  .limit(10)
  .request('/games/')
}

const getUrlCoverByCoverID = async function (coverID) {
  // console.log(coverID);
  return await apicalypse({
    method: 'post',
    baseURL: process.env.VUE_APP_IGDB_API,
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${token}`
    },
    queryMethod: 'body'
  })
    .fields(['url'])
    .limit(1)
    .where(`id = ${coverID}`)
    .request('/covers/')
}

export default {
  getGamesByName,
  getUrlCoverByCoverID
}