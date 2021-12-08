import React from "react";
import Layout from "../../layouts/client";
import DashboardMyWallet from "../../components/dashboard/myWallet";
import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";


const Dashboard = () => {
  return (
    <>
      <DashboardMyWallet />
      <DashboardHotInvestment />
      <DashboardRecommendInvestment />
   
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
