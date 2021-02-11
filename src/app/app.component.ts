import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public resultat: string;


  constructor() {
    this.resultat = 'pending...';
  }


  ngOnInit() {
    
    setTimeout(() => {

      console.log('start');
      const testPlugin = (window as any).test;
      testPlugin.getResult( resultat => this.resultat = resultat );
    }, 1000);
    
  }
}