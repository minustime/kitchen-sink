import { observable } from 'mobx';
import { fetchUploads } from '../services/Uploads';

class UploadStore {
  @observable public uploads: any = [];
  public async loadUploads() {
    try {
      this.uploads = await fetchUploads();
    } catch (err) {
      console.log(err);
    }
  }
}

export default UploadStore;
