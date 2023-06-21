import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import {
    BlockedUserView,
    MutedUserView,
    OnlineUserView,
    TotalUserView,
    HomeView,
    ManageThreadView,
    Login,
    LandingPageView,
    ThreadReport,
    UbahProfile,
    ShowThread,
} from "./views"
import {
    RootLayout,
    ThreadLayout,
    ManageUserLayout,
    ProtectedRoute,
} from "./layout"

const rootRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route
                index
                element={
                    <ProtectedRoute>
                        <HomeView />
                    </ProtectedRoute>
                }
            />
            <Route path="login" element={<Login />} />
            <Route path="landing" element={<LandingPageView />} />
            <Route path="ubahprofil" element={<UbahProfile />} />
            <Route path="show" element={<ShowThread />} />

            <Route
                path="/manageUser"
                element={
                    <ProtectedRoute>
                        <ManageUserLayout />
                    </ProtectedRoute>
                }>
                <Route
                    path="online"
                    element={
                        <ProtectedRoute>
                            <OnlineUserView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="total"
                    element={
                        <ProtectedRoute>
                            <TotalUserView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="muted"
                    element={
                        <ProtectedRoute>
                            <MutedUserView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="blocked"
                    element={
                        <ProtectedRoute>
                            <BlockedUserView />
                        </ProtectedRoute>
                    }
                />
            </Route>

            <Route path="/manageUser" element={<ManageUserLayout />}>
                <Route path="online" element={<OnlineUserView />} />
                <Route path="total" element={<TotalUserView />} />
                <Route path="muted" element={<MutedUserView />} />
                <Route path="blocked" element={<BlockedUserView />} />
            </Route>

            <Route path="thread" element={<ThreadLayout />}>
                <Route path="manage" element={<ManageThreadView />} />
                <Route path="report" element={<ThreadReport />} />
            </Route>
        </Route>
    )
)

export default rootRouter
