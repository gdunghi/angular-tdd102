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

  numberToString = (num: Number): string => {
    if (num === 1) {
      return "1";
    } else if (num === 9) {
      return "9";
    } else if (num === 0) {
      return "0";
    } else if (num === 7) {
      return "7";
    } else if (num === 8) {
      return "8";
    } else if (num === 2) {
      return "2";
    } else if (num === 3) {
      return "3";
    } else if (num === 4) {
      return "4";
    } else if (num === 5) {
      return "5";
    } else if (num === 6) {
      return "6";
    }
    return "1";
  }

}
