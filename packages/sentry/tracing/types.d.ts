import { TransactionContext } from '@sentry/types';
export interface RouteChangeContextData {
    previousRoute?: {
        [key: string]: unknown;
        name: string;
    } | null;
    route: {
        [key: string]: unknown;
        name: string;
        hasBeenSeen: boolean;
    };
}
export type BeforeNavigate = (context: TransactionContext) => TransactionContext;
