import { Component, input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SocialsComponent } from "../socials/socials.component";
import { MatCard } from "@angular/material/card";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
  selector: 'app-overmij',
  templateUrl: './overmij.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SocialsComponent,
    MatCard,
    MatGridList,
    MatGridTile
  ],
  styleUrls: ['./overmij.component.scss']
})
export class OvermijComponent {
  screenSize = input.required<string>();
}
