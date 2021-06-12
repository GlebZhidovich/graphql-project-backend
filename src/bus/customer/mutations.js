import { v4 as uuidv4 } from 'uuid';
import { makeDbRequest } from '../../init/db';
import { UserInputError } from 'apollo-server-express';

export const mutations = {
  signUp: async (_, data) => {
    const { customer } = data;
    const id = uuidv4();
    const newCustomer = { id, ...customer };
    const values = Object.values(newCustomer);
    const query = {
      text: 'INSERT INTO customers (id, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)',
      values: values,
    };
    const res = await makeDbRequest(query);
    if (res.error) {
      throw new UserInputError(res.error);
    }
    return newCustomer;
  },
};
