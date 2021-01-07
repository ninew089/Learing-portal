import {
    RouteProps,
} from 'react-router-dom';
export interface tableProps {
    id: number
    name: string
    when: string

}
export interface DataProps {

    id: string; name: string; when: string;

}

export interface tableDataProps {
    id: number
    editing?: string | undefined
}


export interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    // tslint:disable-next-line:no-any

}