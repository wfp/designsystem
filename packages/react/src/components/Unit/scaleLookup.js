const scaleLookup = {
  thousand: {
    pow: 1000,
    defaultmaximumFractionDigits: 2,
    default: { after: 'T' },
  },
  million: {
    pow: 1000000,
    defaultmaximumFractionDigits: 1,
    default: { after: 'M' },
  },
  billion: {
    pow: 1000000000,
    defaultmaximumFractionDigits: 2,
    default: { after: 'B' },
  },
};

export default scaleLookup;
