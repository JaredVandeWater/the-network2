const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class PostsService {
  async getAllPosts() {
    const res = await api.get('/posts')
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
  }
}

export const postsService = new PostsService()
