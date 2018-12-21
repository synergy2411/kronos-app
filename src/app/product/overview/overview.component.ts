import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id: number;
  name: string;
  category: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
    })
    this.id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      console.log(params);
      this.name = params['name'];
    })
  }

  ngOnInit() {
  }

}
