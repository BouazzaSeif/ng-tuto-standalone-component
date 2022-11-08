import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersService } from './flowers.service';
import { FlowerCardComponent } from './flower-card.component';

@Component({
  selector: 'app-flowers-list',
  standalone: true,
  imports: [CommonModule, FlowerCardComponent],
  template: ` <section class="hero-section">
      <h2 class="hero-text">Discover flowers near to you</h2>
    </section>
    <article class="pet-list">
      <app-flower-card
        *ngFor="let flower of flowerService.flowers; let i = index"
        [index]="i"
        [flower]="flower"
      ></app-flower-card>
    </article>`,
  styles: [
    `
      .pet-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }
      .hero-text {
        font-size: 25pt;
        padding: 10px;
      }
    `,
  ],
})
export class FlowersListComponent implements OnInit {
  constructor(readonly flowerService: FlowersService) {}

  ngOnInit(): void {}
}
