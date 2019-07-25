import Fetch from 'http-fetch-decorator'

const postsURL = 'http://cluster.cenat.ac.cr:8082/getPostsPaginated'
const commentsURL = 'http://cluster.cenat.ac.cr:8082/getCommentsPaginated'

const getQueryParameters = (
  url: string,
  finicio: number,
  ffinal: number,
  limit: number,
  pagenumber: number): string => `${url}?finicio=${finicio}&ffinal=${ffinal}&limit=${limit}&pagenumber=${pagenumber}`

export const getPosts = (
  finicio: number,
  ffinal: number,
  limit: number,
  pagenumber: number) => Fetch(getQueryParameters(
    postsURL,
    finicio,
    ffinal,
    limit,
    pagenumber
  ), { method: 'GET', mode: 'cors' })

export const getComments = (
  finicio: number,
  ffinal: number,
  limit: number,
  pagenumber: number) => Fetch(getQueryParameters(
    commentsURL,
    finicio,
    ffinal,
    limit,
    pagenumber
  ), { method: 'GET', mode: 'cors' })
