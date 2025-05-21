import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {


  constructor( private route:Router ) {}

  ngOnInit(): void {
    //  
  }

  doSearch(value:string) {
    this.route.navigateByUrl(`/search/${value}`);
  }



}
