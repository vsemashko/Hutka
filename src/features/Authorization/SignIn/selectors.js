export const getPhoneNumber = ({
  authorization: {
    telephoneNumber,
  },
}) => telephoneNumber;

export const isUserFetching = ({
  authorization: {
    fetching,
  },
}) => fetching;
