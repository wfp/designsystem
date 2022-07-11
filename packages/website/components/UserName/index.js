import React from "react";

export const generateUserName = (patient) => {
  console.log("patientpatientpatient", patient);
  if (patient?.auth0User?.app_metadata?.first_name) {
    return `${patient.auth0User.app_metadata.first_name} ${patient.auth0User.app_metadata.last_name}`;
  }
  if (patient?.auth0User?.family_name) {
    return `${patient.auth0User.given_name} ${patient.auth0User.family_name}`;
  }

  if (patient && patient?.auth0User) {
    return patient.auth0User.name;
  }

  if (patient && (patient.meta?.firstName || patient.meta?.lastName)) {
    return `${patient.meta?.firstName} ${
      (patient.meta?.firstName || patient.meta?.lastName) && " "
    }${patient.meta?.lastName}`;
  }
  return null;
};

export const UserName = ({ id, notFound = "No user assigned" }) => {
  const { data, isLoading, isSuccess } = usersApi.useGetSingleUsersQuery(id);
  if (isLoading) return <>Loading...</>;
  if (isSuccess) return <UserNameNew user={data} />;
  return <Trans>{notFound}</Trans>;
};

export const userNameString = ({ id, notFound = "No user assigned" }) => {
  const { data, isLoading, isSuccess } = usersApi.useGetSingleUsersQuery(id);

  if (isLoading) return "Loading...";

  if (isSuccess && generateUserName(data)) return generateUserName(data);
  return notFound;
};

export const UserNameNew = ({ user }) => {
  const userName = generateUserName(user);

  if (userName !== null) {
    return userName;
  } else {
    return <span>Unnamed user</span>;
  }
};

export default UserName;
