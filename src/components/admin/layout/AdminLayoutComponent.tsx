import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AdminAppBarComponent from "./app-bar/AdminAppBarComponent";
import AdminDrawerContainer from "./drawer/AdminDrawerContainer";
import {useAdminLayoutStyles} from "../../../assets/material/AdminAsset";
import {
    IAdminAppBarComponentProps,
    IAdminDrawerContainerProps,
    IAdminLayoutComponentProps
} from "../../../models/admin/AdminLayoutModel";
import {AdminRoutes} from "../../../Routes";
import ErrorBoundary from "../../common/ErrorBoudary";

const AdminLayoutComponent = React.memo((props: IAdminLayoutComponentProps) => {
    const classes = useAdminLayoutStyles();  // Admin Layout styles
    const {open, handleDrawer} = props;  // get properties from props

    const adminDrawerProps = {  // Drawer props
        open: open,
        handleDrawer: handleDrawer
    };

    const adminAppBarProps: IAdminAppBarComponentProps = {  // App Bar props
        open: open,
        handleDrawer: handleDrawer
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AdminAppBarComponent {...adminAppBarProps} />

            <AdminDrawerContainer {...adminDrawerProps} />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {/* Wrap our content with error boundary */}
                <ErrorBoundary>
                    {/* app admin routes */}
                    <AdminRoutes />
                </ErrorBoundary>
            </main>
        </div>
    )
});

export default AdminLayoutComponent;