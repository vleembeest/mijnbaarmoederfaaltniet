import { Component, input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SocialsComponent } from "../socials/socials.component";
import { MatCard } from "@angular/material/card";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
  selector: 'app-ooievaar',
  templateUrl: './ooievaar.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SocialsComponent,
    MatCard,
    MatGridList,
    MatGridTile
  ],
  styleUrls: ['./ooievaar.component.scss']
})
export class OoievaarComponent {
  screenSize = input.required<string>();
}
