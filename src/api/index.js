// ! TODO: This should be moved into it's own repository
import axios from 'axios';

const api = {
  url: 'http://localhost:4000',
  async uploadFile(file, fileName) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    console.log('formData: ', formData);

    try {
      const res = await axios.post(`${this.url}/upload`, formData);

      return res;
    } catch (ex) {
      console.log(ex);
    }
  },
  async getFiles() {
    try {
      const res = await axios.get(`${this.url}/get`);
      const data = (res && res.data) || [];

      return data;
    } catch (ex) {
      console.log(ex);
    }
  },
  async deleteFile(fileName = '') {
    try {      
      const res = await axios.post(`${this.url}/delete`, { fileName });
      const data = (res && res.data) || [];

      return data;
    } catch (error) {
      console.log('error: ', error);
    }
  }
};

export default api;