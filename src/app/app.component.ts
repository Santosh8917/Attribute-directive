import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attribute';
//ngStyle
  myStyles = {
    width: '150px',
    height: '100px',
    background:'red',
    color:'yellow',
    
  }

  addStyles(){
    this.myStyles['color'] = 'white';
    this.myStyles['background'] = 'blue'
  }

  //ngClass
myClasses = {
  box: true,
  border: false,
  circle: false
};

changeShape(){
  // this.myClasses.border = true;
 // this.myClasses.circle = true;

 //dynamically changes shape from rectangular to circle and circle to rectangular
 this.myClasses.border = !this.myClasses.border;
 this.myClasses.circle =!this.myClasses.circle

}

}
