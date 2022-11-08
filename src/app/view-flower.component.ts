import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flower, FlowersService } from './flowers.service';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-flower',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="details-panel" *ngIf="flower$ | async as flower">
      <img
        class="main-img"
        src="assets/{{ flower.photo || 'default.jfif' }}"
        alt="Photo of {{ flower.name }}"
      />
      <article>
        <h1 class="main-text">{{ flower.name }}</h1>
        <h2>
          <span class="emphasize">{{ flower.category }}</span>
        </h2>
        <p>{{ flower.instructions }}</p>
      </article>
    </article>
  `,
  styles: [
    `
      .details-panel {
        display: flex;
        padding: 10px;
        gap: 50px;
      }
      .main-img {
        border-radius: 10px;
        width: 400px;
      }
      .main-text {
        font-size: 34pt;
        margin-bottom: 20px;
      }
      .emphasize {
        font-weight: bold;
      }
      h2 {
      }
    `,
  ],
  
})
export class ViewFlowerComponent implements OnInit {
  flower$!: Observable<Flower | undefined>;

  constructor(
    private flowerService: FlowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flower$ = this.route.paramMap.pipe(
      map((params) => {
        return this.flowerService.flowers[Number(params.get('index'))];
      })
    );
  }
}
