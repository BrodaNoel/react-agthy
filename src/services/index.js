import axios from 'axios';

const baseUrl = 'https://us-central1-agthy-site.cloudfunctions.net/track';

export default {
  backend: {
    reaction: ({ customerId, campaignId, reaction, url }) => {
      return axios({
        url: `${baseUrl}/reaction`,
        method: 'POST',
        data: {
          reaction,
          customerId,
          campaignId,
          url
        }
      });
    }
  }
};
