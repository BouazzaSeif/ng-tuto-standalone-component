import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flower } from './flowers.service';

@Component({
  selector: 'app-flower-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="flower-card">
      <img
        class="flower-img"
        src="assets/{{ flower.photo || 'default.jfif' }}"
        alt="Photo of {{ flower.name }}"
      />
      <p class="flower-headline">
        <span class="flower-name">{{ flower.name }}</span>
      </p>
      <p class="flower-description">
        <span class="flower-name">{{ flower.category }}</span> :
        {{ flower.instructions }}
      </p>
      <p class="flower-learn-more">
        <a href="/details/{{ index }}">Learn More</a>
      </p>
      <article></article>
    </article>
  `,
  styles: [
    `
      .flower-card {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        width: 300px;
        max-height: 500px;
        height: 500px;
      }
      .flower-img {
        border-radius: 10px 10px 0 0;
        width: 300px;
        max-height: 180px;
      }
      .flower-name {
        font-weight: bolder;
      }
      .flower-description,
      .flower-headline,
      .flower-learn-more {
        padding: 10px;
        max-height: 50px;
      }
      .flower-headline {
        font-size: 18pt;
      }
    `,
  ],
})
export class FlowerCardComponent implements OnInit {
  @Input() flower!: Flower;
  @Input() index!: number;
  constructor() {}

  ngOnInit(): void {}
}
