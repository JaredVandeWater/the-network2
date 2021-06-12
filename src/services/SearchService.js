import { AppState } from '../AppState'
import { api } from './AxiosService'

class SearchService {
  async setSearchResults(query) {
    const ProfRes = await api.get(`profiles?query=${query}`)
    const PostRes = await api.get(`posts?query=${query}`)
    AppState.posts = PostRes.data.posts
    AppState.profileResults = ProfRes.data
  }
}

export const searchService = new SearchService()
