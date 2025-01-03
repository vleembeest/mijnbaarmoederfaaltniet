import { Component, input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SocialsComponent } from "../socials/socials.component";
import { MatCard } from "@angular/material/card";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
  selector: 'app-mijn-baarmoeder-faalt-niet',
  templateUrl: './mijnbaarmoederfaaltniet.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SocialsComponent,
    MatCard,
    MatGridList,
    MatGridTile
  ],
  styleUrls: ['./mijnbaarmoederfaaltniet.component.scss']
})
export class MijnbaarmoederfaaltnietComponent {
  screenSize = input.required<string>();
}
