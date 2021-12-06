import React from 'react';

const statusLookup = {
  experimental: {
    name: 'Experimental: do not use in production!',
    type: 'warning',
  },
  released: { name: 'Ready for production', type: 'info' },
  legacy: { name: 'Legacy: do not use in new projects', type: 'warning' },
};

export default statusLookup;
