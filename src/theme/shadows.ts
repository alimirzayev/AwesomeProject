const resultBoxShadow = {
  ios: {
    shadowColor: 'rgba(16, 18, 30, 0.10)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 15,
    backgroundColor: 'white'
  },
  android: {
    elevation: 4,
  },
};

const userBoxShadow = {
  ios: {
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    backgroundColor: 'white'
  },
  android: {
    elevation: 4,
  },
};


export const shadows = {
  resultBoxShadow,
  userBoxShadow
};
