import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  profileResults: [],
  profileInfo: {},
  pageButtons: {
    next: '',
    prev: ''
  },
  currentPage: 1,
  a: []
})
