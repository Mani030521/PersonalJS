const initialState = {
  loginDetails: {
    loginData: {},
    isUserLoggedIn: false,
    bookingHistory: [],
    isPending: false,
    token: null,
    isAdmin: false,
    isRejected: false,
    errorText: '',
    isFetched: false,
    currentUserDetails: {
      userName: null,
    },
  },
  trainDetails: {
    isPending: false,
    isRejected: false,
    trainDuplicateData: [],
    trainData: [],
    noTrain: false,
    isFetched: false,
  },
};

export default initialState;
