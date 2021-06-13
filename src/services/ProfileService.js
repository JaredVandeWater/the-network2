import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfileInfo(id) {
    const res = await api.get(`/profiles/${id}`)
    AppState.profileInfo = res.data
    console.log(AppState.profileInfo)
  }
}
export const profileService = new ProfileService()
