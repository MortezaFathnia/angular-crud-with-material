import { InjectionToken, Provider } from "@angular/core";

export interface NotificationConfig {
    duration: number;
    actionLabel?: string;
}

export const DEFAULT_CONFIG: NotificationConfig = {
    duration: 10000,
    actionLabel: 'OK'
};

export const NOTIFICATION_CONFIG = new InjectionToken<NotificationConfig>('notification.config');

export const NotificationConfigProvider: Provider = {
    provide: NOTIFICATION_CONFIG,
    useValue: DEFAULT_CONFIG
};
