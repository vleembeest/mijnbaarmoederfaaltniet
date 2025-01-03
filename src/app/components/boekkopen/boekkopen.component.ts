import { Component, input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SocialsComponent } from "../socials/socials.component";
import { MatCard } from "@angular/material/card";
import { MatSlider, MatSliderThumb } from "@angular/material/slider";
import { CarouselComponent } from "ngx-carousel-ease";
import { MatDivider } from "@angular/material/divider";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
  selector: 'app-boekkopen',
  templateUrl: './boekkopen.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SocialsComponent,
    MatCard,
    MatSlider,
    MatSliderThumb,
    CarouselComponent,
    MatDivider,
    MatGridList,
    MatGridTile,
  ],
  styleUrls: ['./boekkopen.component.scss']
})
export class BoekkopenComponent {
  screenSize = input.required<string>();
}
