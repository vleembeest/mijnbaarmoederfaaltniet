import { Component, OnInit, signal } from '@angular/core';
import {
  MijnbaarmoederfaaltnietComponent
} from "./components/mijnbaarmoederfaaltniet/mijnbaarmoederfaaltniet.component";
import { OvermijComponent } from "./components/overmij/overmij.component";
import { MatDivider } from "@angular/material/divider";
import { ReactiesComponent } from "./components/reacties/reacties.component";
import { BoekkopenComponent } from "./components/boekkopen/boekkopen.component";
import { OoievaarComponent } from "./components/ooievaar/ooievaar.component";
import { MatHeaderRow } from "@angular/material/table";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatCard } from "@angular/material/card";
import { MatNavList } from "@angular/material/list";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MijnbaarmoederfaaltnietComponent,
    OvermijComponent,
    MatDivider,
    ReactiesComponent,
    BoekkopenComponent,
    OoievaarComponent,
    MatHeaderRow,
    MatCard,
    MatNavList,
    TranslateModule
  ],
  standalone: true
})
export class AppComponent implements OnInit {

  sizeSignal = signal<string>('large')

  constructor(private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Large])
      .subscribe(result => {

        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.XSmall]) {
          this.sizeSignal.set('xsmall');
        } else if (breakpoints[Breakpoints.Large]) {
          this.sizeSignal.set('large');
        }

      });
  }
}
