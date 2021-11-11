export const SELECT_VILLAGE = "SELECT_VILLAGE";
export const selectVillage = (village) => ({
  type: SELECT_VILLAGE,
  payload: {
    village,
  },
});

export const ONCLICK_FILTER = "ONCLICK_FILTER";
export const onclickFilter = (filter) => ({
  type: ONCLICK_FILTER,
  payload: {
    filter,
  },
});