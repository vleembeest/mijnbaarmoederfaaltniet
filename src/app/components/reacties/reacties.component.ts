import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { SocialsComponent } from "../socials/socials.component";
import { MatCard } from "@angular/material/card";
import { MatSlider, MatSliderThumb } from "@angular/material/slider";
import { CarouselComponent } from "ngx-carousel-ease";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-reacties',
  templateUrl: './reacties.component.html',
  standalone: true,
  imports: [
    TranslateModule,
    SocialsComponent,
    MatCard,
    MatSlider,
    MatSliderThumb,
    CarouselComponent,
    MatDivider,
  ],
  styleUrls: ['./reacties.component.scss']
})
export class ReactiesComponent {

  reviews = [{
    name: 'Nicolien',
    review: '‘Je neemt mij als lezer zo mooi mee in jouw intense proces van verdriet en rouw. Prachtig om te lezen hoe je steeds bewuster wordt en door welk transformatieproces je heengaat. Ik kan me voorstellen dat heel veel vrouwen die in een soortgelijke situatie terechtkomen heel veel herkenning, steun en hopelijk wijsheid vinden in jouw verhaal’.'
  }, {
    name: 'Anke',
    review:
      '‘Het lezen van je boek maakt me opnieuw bewust van (ook mijn) levensweg zonder kinderen. Ik deel je ervaring dat de gedachtewereld me in de greep kan houden van "wat wil ik graag... en wat mis ik toch... en alles zou anders zijn als".... en mezelf schuldig en onnuttig voelen. Het is een enorme leerweg, die soms heel erg pijn doet. Diep respect voel ik voor je dat je deze weg helemaal gegaan bent.’'
  },
    {
      name: 'Gerrie',
      review: '\n' +
        '‘Ik wil je bedanken voor je boek, Astrid. Het helpt me in mijn rouwproces.’'
    },
    {
      name: 'Rinske',
      review: '‘Toen ik je artikel in de krant las, over de publicatie van je boek, werd ik daar zo blij van! Jij, met jouw begaafdheid om te voelen, te zien en te verwoorden wat dit proces met je gedaan heeft. Heerlijk bevrijdend is het moment waarop je je 40e verjaardag beschrijft aan het einde van het boek. Zo hoop ik dat je mag blijven leven... in volle verwondering voor al het moois dat dit leven ons biedt’'
    }
  ];
}
