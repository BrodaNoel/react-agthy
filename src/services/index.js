import axios from 'axios';

const baseUrl = 'https://us-central1-agthy-site.cloudfunctions.net/track';

export default {
  backend: {
    reaction: ({ customerId, reaction, url }) => {
      return axios({
        url: `${baseUrl}/reaction`,
        method: 'POST',
        data: {
          reaction,
          customerId,
          url
        }
      });
    }
  }
};
