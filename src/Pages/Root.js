import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import { authAction } from "../store/userAuth-slice";

import DashBoard from "../components/DashBoard";
import { useEffect } from "react";

function RootPage() {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const featurePrivilege = {
    finding: [],
    ticket: [],
    dashboard: [],
    runbook: [],
  };

  data.featurePrivilege.forEach((item) => {
    const key = item[0];
    featurePrivilege[key].push(item[1]);
  });
  // console.log(featurePrivilege);

  const userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    orgName: data.orgName,
    role: data.role,
    photo: data.photo,
    featurePrivilege: featurePrivilege,
  };

  useEffect(() => {
    dispatch(authAction.login(userData));
  }, []);
  return (
    <main>
      <DashBoard />
      <Outlet />
    </main>
  );
}

export default RootPage;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Outlet, useLoaderData } from "react-router-dom";
// import { authAction } from "../../Store/adminAuth-slice";
// import DashBoard from "../../components/Admin/DashBoard";
// function RootPage() {
//   const dispatch = useDispatch();
//   const resData = useLoaderData();
//   const adminData = {
//     name: resData.data.data.name,
//     email: resData.data.data.email,
//     photo: resData.data.data.photo,
//   };
//   useEffect(() => {
//     dispatch(authAction.login(adminData));
//   }, []);

//   return (
//     <main style={{ display: "flex" }}>
//       <DashBoard data={adminData} />
//       <Outlet />
//     </main>
//   );
// }

// export default RootPage;
