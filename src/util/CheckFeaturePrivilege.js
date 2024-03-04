import { userStore } from "../store/userAuth-slice";

export const checkFeaturePrivilege = (feature, privilege) => {
  const store = userStore.getState().userReducer;

  const featurePrivilege = store.featurePrivilege;

  return (
    featurePrivilege.hasOwnProperty(feature) &&
    featurePrivilege[feature].includes(privilege)
  );
};
