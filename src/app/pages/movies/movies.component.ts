import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilms } from 'src/app/models/IFilms';

interface Mode {
  icon: string; // This could be a URL or a class name for a font icon set
  title: string;
  description: string;
  buttonText: string;
  available: boolean; // Indicates if the mode is available or coming soon
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  films!:IFilms[]
  loading= false
  errorMessage=''
  regularFIlms!:IFilms[]

  modes: Mode[] = [
    {
      icon: '🧑‍💻',
      title: 'Bulk People Ask Mode',
      description: 'Create engaging blog posts from top Google queries. Utilize our keyword tool for the hottest topics.',
      buttonText: 'Explore Tool',
      available: true,
    },
    {
      icon: '🔍',
      title: 'Local SEO Mode',
      description: 'Boost your local presence by targeting services and products in your area. Strengthen your local SEO effortlessly.',
      buttonText: 'Use Local SEO',
      available: true,
    },
    {
      icon: '✨',
      title: 'Custom Solo Mode',
      description: 'Take the reins with Solo Mode. Customize content to your preference, with our insights to guide you.',
      buttonText: 'Get Started',
      available: false, 
    },

  ];


  constructor( private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.loading= false;
  }

  useMode(mode: Mode): void {
    if (!mode.available) {
      console.log('This feature is coming soon!');
    } else {
      this.router.navigate(['paa'], { relativeTo: this.route });
    }
  }
}
