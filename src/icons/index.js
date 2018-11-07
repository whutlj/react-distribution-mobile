const req = require.context('./svg', false, /\.svg$/);
const importAll = (r) => {
  r.keys().forEach(r);
};
importAll(req);
