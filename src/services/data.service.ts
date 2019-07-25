import Fetch from 'http-fetch-decorator'

export default class DataService {

  @Fetch('http://cluster.cenat.ac.cr:8082/getPostsPaginated', { method: 'GET', mode: 'cors' })
  static getPosts(parameters, result?: any, error?: any) {
    console.log(result)
  }

}
