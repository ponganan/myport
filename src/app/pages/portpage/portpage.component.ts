import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'myport-portpage',
  templateUrl: './portpage.component.html',
  styleUrl: './portpage.component.scss'
})

export class PortpageComponent implements OnInit {

  // use this function for call .pc outsite app.component
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    //this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcMode = false;
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcMode = true;
              }
            }
          }
        }
      })
  }
}