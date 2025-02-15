import { ErrorPage } from "pages/Error"
import { MainPage } from "pages/MainPage"
import { SingInPage } from "pages/SingInPage"
import { RouteProps } from "react-router-dom"


export const enum AppRoutes {
    MAIN = 'main',
    ERROR = 'error',
    SING_IN = 'sing-in',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ERROR]: '/error',
    [AppRoutes.SING_IN]: '/sing-in',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.error,
        element: <ErrorPage />
    },
    [AppRoutes.SING_IN]: {
        path: RoutePath["sing-in"],
        element: <SingInPage />
    }
}