import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    'https://images.wallpaperscraft.com/image/cube_figure_dark_142157_1920x1080.jpg',
    'https://images.wallpaperscraft.com/image/cube_3d_neon_156687_1920x1080.jpg'
  ];

  constructor() {}

  ngOnInit() {}

}