import React, { useEffect } from "react";
import OrderOverview from "../../components/Dashboard/OrderOverview";
import OrderStatus from './../../components/Dashboard/OrderStatus';

export default function Dashboard() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <>
      <OrderOverview></OrderOverview>
      <OrderStatus></OrderStatus>
    </>
  );
}
