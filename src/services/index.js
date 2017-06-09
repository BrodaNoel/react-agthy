import axios from 'axios';

const baseUrl = 'https://us-central1-agthy-site.cloudfunctions.net/api';

export default {
  backend: {
    like: ({ customer, reaction, url }) => {
      return axios({
        url: `${baseUrl}/customer/${customer.id}/like`,
        method: 'POST',
        data: {
          reaction,
          url
        }
      });
    }
  }
};
