import { fromSafeString } from '../../utils';

const subtract = function (...args: any[]) {
  // Check if there are parameters
  if (args.length === 1) {
    return '';
  }

  return args.reduce((sum, item, index) => {
    if (!isNaN(Number(fromSafeString(item))) && index !== args.length - 1) {
      return Number(sum) - Number(item);
    } else {
      return Number(sum);
    }
  });
};
export default subtract;
