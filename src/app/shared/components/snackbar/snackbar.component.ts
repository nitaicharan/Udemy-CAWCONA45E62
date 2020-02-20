import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px',
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px',
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility = 'hidden';
  message: string;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
      .pipe(
        tap(message => {
          this.message = message;
          this.snackVisibility = 'visible';
        }),
        switchMap(() => timer(3000))
      ).subscribe(() => this.snackVisibility = 'hidden');
  }
}
