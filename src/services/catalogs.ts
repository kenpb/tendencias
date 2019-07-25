import Fetch from 'http-fetch-decorator'

const themeURL = 'http://cluster.cenat.ac.cr:8081/category/getCategory'
const mediaURL = 'http://cluster.cenat.ac.cr:8081/Media/getMedia'

export const getThemes = () => Fetch(themeURL, { method: 'GET', mode: 'cors' })
export const getMedias = () => Fetch(mediaURL, { method: 'GET', mode: 'cors' })
