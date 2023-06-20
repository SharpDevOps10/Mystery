'use strict';

import { $authHost, $host } from './index';

export const registration = async (email, password) => {
  const response = await $host.post('api/authorization/registration', {
    email,
    password,
    role: 'ADMIN',
  });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post('api/authorization/login', {
    email,
    password,
  });
  return response;
};
