import React from "react";
import Layout from "../../layouts/client";
import DashboardMyWallet from "../../components/crowdInvest/myWallet";
import DashboardHotInvestment from "../../components/crowdInvest/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommedInvestment";

const CrowdInvest = () => {
  return (
    <>
      <DashboardMyWallet />
      <DashboardHotInvestment />
    </>
  );
};

export default CrowdInvest;

CrowdInvest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
