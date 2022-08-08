import { NgModule } from '@angular/core';
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { NotificationService } from './notification.service';
import { NotificationConfigProvider } from './notification.config';



@NgModule({
    imports: [
        MatSnackBarModule
    ],
    providers: [
        NotificationService,
        NotificationConfigProvider
    ],
})
export class NotificationModule {}
