import {trigger, state, style, transition, animate} from '@angular/animations';

export const fadeLateral =
  trigger('fadeLateral', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-10%)'
      }),
      animate('500ms ease-in', style({
        opacity: 1,
        transform: 'translateX(0)'

      }))
    ]),
  ]);
