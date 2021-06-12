
const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class PostsService {
  async getAllPosts() {
    const res = await api.get(`/posts?page=${AppState.currentPage}`)
    AppState.posts = res.data.posts
    AppState.pageButtons = { prev: res.data.newer, next: res.data.older }
  }

  async getProfilePosts(id) {
    const res = await api.get(`profiles/${id}/posts`)
    AppState.posts = res.data.posts
  }

  async likePost(id) {
    await api.post(`posts/${id}/like`)
    this.getAllPosts()
  }

  async createPost(newPost, path) {
    await api.post('/posts', newPost)
    if (path === '/') {
      this.getAllPosts()
    }
  }

  async deletePost(id) {
    await api.delete(`/posts/${id}`)
    this.getAllPosts()
  }

  async next() {
    const res = await api.get(AppState.pageButtons.next)
    AppState.posts = res.data.posts
    AppState.currentPage = res.data.page[0]
    AppState.pageButtons = { prev: res.data.newer, next: res.data.older }
  }

  async prev() {
    const res = await api.get(AppState.pageButtons.prev)
    AppState.posts = res.data.posts
    AppState.currentPage = res.data.page[0]
    AppState.pageButtons = { prev: res.data.newer, next: res.data.older }
  }
}

export const postsService = new PostsService()
