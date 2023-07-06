import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/UI/PageLoader/PageLoader';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/provider/router/UI/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
