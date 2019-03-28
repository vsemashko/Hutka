export const isConfirmCodeFetching = ({
  confirmSignIn: {
    fetchingConfirmCode,
  },
}) => fetchingConfirmCode;

export const isSendCodeAgainFetching = ({
  confirmSignIn: {
    fetchingSendCodeAgain,
  },
}) => fetchingSendCodeAgain;
