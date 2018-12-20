import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, DoCheck, AfterViewChecked, AfterViewInit, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, DoCheck, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input('title') title : string;
  constructor() { }

  ngOnInit() {console.log("ngOnInit")}
  ngAfterContentChecked(){console.log("ngAfterContentChecked")}
  ngAfterContentInit(){console.log("ngAfterContentInit")}
  ngAfterViewChecked(){console.log("ngAfterViewChecked")}
  ngAfterViewInit(){console.log("ngAfterViewInit")}
  ngDoCheck(){console.log("ngDoCheck")}
  ngOnDestroy(){console.log("ngOnDestroy")}
  ngOnChanges( changes : SimpleChanges){console.log("ngOnChanges", changes)}

}
