import axios from 'axios';

const UPLOADS_ENDPOINT = '/api/files';

export const fetchUploads = async () => {
  try {
    const results = await axios.get(UPLOADS_ENDPOINT);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};
