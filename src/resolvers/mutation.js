// Mutations
import { mutations as taskMutations } from '../bus/task/mutations';
import { mutations as customerMutations } from '../bus/customer/mutations';

export const Mutation = {
  ...taskMutations,
  ...customerMutations
};
