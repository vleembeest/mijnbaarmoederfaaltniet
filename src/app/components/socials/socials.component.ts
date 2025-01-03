import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  standalone: true,
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
  light = input.required<boolean>();
  suffix = computed(() => this.light() ? '-light' : '-dark');
}
