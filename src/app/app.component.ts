import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public pattern: string = "";
  public leftOperand: number;
  public operand: number;
  public rightOperand: number;
  public result: string;

  ngOnInit() {
  }

  clickCaptcha = () => {
    this.result = "?";
  }

}
