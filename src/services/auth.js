import BaseService from './baseService';
import API from '../config/rest';

const getHotel = (name) => {
  return BaseService.get(API.HOTEL, {
    params: {
      limit: 100,
      offset: 0,
      search: name,
    },
  });
};

export default { getHotel };