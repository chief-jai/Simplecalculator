import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  n : any[] = [0,1,2,3,4,5,6,7,8,9];
 output : string = "";
 expression : string = "";
 operation : string[] = ['', '', ''];
 updateOutput(num:string): void{
    this.expression += num;
    // if operator is defined, set second variable
    if(this.operation[1].length) {
      this.operation[2] = this.expression;
    }
    // else set first variable
    else {
      this.operation[0] = this.expression;
    }

    this.renderDisplay();
  }
  renderDisplay(): void {
    this.output = this.operation.join(' ');
  }
  operate(operator:string): void {
    if(!this.operation[0].length){
      alert('Enter number before operation');
      return;
    }
    this.operation[1] = operator;
    //alert(operator);
    this.expression = '';
    this.renderDisplay();
  }
  clear(): void {
    this.output = "";
    this.expression = "";
    this.operation = ['', '', ''];
    //this.renderDisplay();
  }

  answer(): void {
    //this.renderDisplay();
    this.operation[0] = this.output;
    this.expression = "";
    this.operation[1] = '';
    this.operation[2] = '';
    this.renderDisplay();
  }
  equal():void{
    if(!this.operation[0].length){
      alert('Enter number before operation');
      return;
    }
    switch(this.operation[1]) {
      case '*':
        this.output=String((parseFloat(this.operation[0]) * parseFloat(this.operation[2])));
        this.operation[0] = this.output;
        this.operation[1] = '';
        this.operation[2] = '';
        break;
      case "+":
        this.output=String((parseFloat(this.operation[0]) + parseFloat(this.operation[2])));
        this.operation[0] = this.output;
        this.operation[1] = '';
        this.operation[2] = '';
        break;
      case "-":
        this.output=String((parseFloat(this.operation[0]) - parseFloat(this.operation[2])));
        this.operation[0] = this.output;
        this.operation[1] = '';
        this.operation[2] = '';
        break;
      case "/":
          this.output=String((parseFloat(this.operation[0]) / parseFloat(this.operation[2])));
          this.operation[0] = this.output;
          this.operation[1] = '';
          this.operation[2] = '';
          break;
    }
  }
}
