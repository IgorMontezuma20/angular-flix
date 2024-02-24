import { MoviesService } from '../../services/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Video } from '../../types/video';
import { Image } from '../../types/image';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{

  showId = '';

  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;

  imagesSizes =IMAGES_SIZES;

  constructor(private router: ActivatedRoute, private moviesService: MoviesService) { }

   ngOnInit(): void {
    this.showId = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.showId);
    this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
    this.showImages$ = this.moviesService.getMovieImages(this.showId);
   }
}
