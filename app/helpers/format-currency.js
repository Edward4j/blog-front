import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params, namedArgs) {

  let dollars = Math.floor(params);
  let cents = params * 100 % 100;
  let sign = namedArgs.sign === undefined ? '$' : namedArgs.sign;

  return `${sign}${dollars}.${cents}`;
});
