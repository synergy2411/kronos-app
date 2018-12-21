import { AuthServiceService } from './services/auth-service.service';
import { DataService } from './services/data.service';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection : ChangeDetectionStrategy
})
export class AppComponent implements OnInit {
  constructor(public dataService: DataService,
    public authService : AuthServiceService, private cdRef : ChangeDetectorRef,
      private sanitize : DomSanitizer) {
      //   this.sanitize.
      // this.cdRef.detach()
     }

  increase() {
    this.dataService.counter++;
  }
  title = 'Angular!';

  htmlSnippets = "Template Syntax : <script>alert('Hello XSS!')</script>";
  

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 
      authDomain: 
    })
  }
}
