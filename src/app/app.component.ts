import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'myport-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    //this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        }
      })
  }
}