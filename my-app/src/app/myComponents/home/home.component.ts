import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public res:any = fetch('https://dogs.com/api/breeds/list/all');
// public json:any = this.res.json();
constructor(){
  console.log(this.res);

}
  
}
