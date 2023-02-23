export const getAllStatuses = ({statuses}) => statuses;

export const STATUSES = {
  busy: "Busy",
  reserved: "Reserved",
  free: "Free",
  cleaning: "Cleaning",
};

const statusRedux = (statePart = [], action) => {
    switch (action.type) {
      default:
        return statePart;
    }
  };

export default statusRedux;