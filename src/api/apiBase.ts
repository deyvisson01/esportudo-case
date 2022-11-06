import api from './api'

const baseHeaders = (othersHeaders = {}) => ({
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '2b3c8a360d8919d39cc1a02ff9aeabb3',
    ...othersHeaders
  }
})

export const Get = async (
  url: string,
  params?: any,
  headers?: {} | undefined
) => {
  try {
    const data = await api.get(url, { params, ...baseHeaders(headers) })
    return data.data
  } catch (error) {
    throw error
  }
}

export const Post = (url: string, data: any, headers: {} | undefined) => {
  return api
    .post(url, data, baseHeaders(headers))
    .then(data => data.data)
    .catch(error => {
      throw error
    })
}

export const Put = (url: string, data: any, headers: {} | undefined) => {
  return api
    .put(url, data, baseHeaders(headers))
    .then(data => data.data)
    .catch(error => {
      throw error
    })
}

export const Delete = (url: string, data: any, headers: {} | undefined) => {
  return api
    .delete(url, { data, headers: baseHeaders(headers).headers })
    .then(data => data.data)
    .catch(error => {
      throw error
    })
}

export const Patch = (url: string, data: any, headers: {} | undefined) => {
  return api
    .patch(url, data, baseHeaders(headers))
    .then(data => data.data)
    .catch(error => {
      throw error
    })
}
