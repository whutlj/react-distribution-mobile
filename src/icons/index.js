const req = require.context('./svg', false, /\.svg$/);
const importAll = (r) => {
  console.log(r.keys());
  r.keys().forEach(r);
};
importAll(req);
console.log('svg-----------');
