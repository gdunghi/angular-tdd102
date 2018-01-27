import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TDD Captcha';

  public pattern: number;
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
