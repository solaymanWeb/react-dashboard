import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import Setting from "../pages/Setting/Setting";
import Faqs from "../pages/Faqs/Faqs";
import MenuManagement from "../pages/MenuManagement/MenuManagement";
import Analytics from "../pages/Analytics/Analytics";
import Wallet from "../pages/Wallet/Wallet";
import ReviewRating from "../pages/ReviewRating/ReviewRating";
import OrderRequests from "../pages/Order/OrderRequests";
import OrderList from "../pages/Order/OrderList";
import Profile from "../pages/Profile/Profile";
import Notifications from "../pages/Notifications/Notifications";
import AcceptDaliveryMan from "../components/Dashboard/AcceptDaliveryMan";
import PickUpDaliveryMan from "../components/Dashboard/PickUpDaliveryMan";



const Routers = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/order",
                children: [
                    {
                        path: "order-requests",
                        element: <OrderRequests />
                    },
                    {
                        path: "order-lists",
                        element: <OrderList />
                    }
                ]
            },
            {
                path: "/menu-management",
                element: <MenuManagement />
            },
            {
                path: "/analytics",
                element: <Analytics />
            },
            {
                path: "/wallet",
                element: <Wallet />
            },
            {
                path: "/review-rating",
                element: <ReviewRating />
            },
            {
                path: "/help-center",
                element: <HelpCenter />
            },
            {
                path: "/setting",
                element: <Setting />
            },
            {
                path: "/faqs",
                element: <Faqs />
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/notifications",
                element: <Notifications/>
            },
            {
                path: "/accept-delivery-man",
                element:<AcceptDaliveryMan/>
            },
          

        ]

    }

])

export default Routers;