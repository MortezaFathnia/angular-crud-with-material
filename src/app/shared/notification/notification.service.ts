import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationConfig, NOTIFICATION_CONFIG } from './notification.config';

@Injectable()
export class NotificationService {

    constructor(
        private snackbar: MatSnackBar,
        @Inject(NOTIFICATION_CONFIG) private config: NotificationConfig
    ) {}

    notify(message: string, action?: string): void {
        const { actionLabel, duration } = this.config;
        this.snackbar.open(message, action ?? actionLabel, { duration });
    }
}
