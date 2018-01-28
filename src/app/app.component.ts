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

  numberToString = (num: number): string => {
    return num + "";
  }
  public operands = { 1: "+", 2: "-", 3: "*", 4: "/" };
  numberToOperand = (num: number): string => {
    return this.operands[num] || "";
  }
  public textOfNumber = { 0: "ZERO", 1: "ONE", 2: "TWO", 3: "THREE", 4: "FOUR", 5: "FIVE", 6: "SIX", 7: "SEVEN", 8: "EIGHT", 9: "NINE" };

  numberToText = (num: number): string => {
    return this.textOfNumber[num];
  }

  getLeftOperand = (pattern: number, leftOperand: number): string => {

    if (pattern === 1) {
      return this.numberToString(leftOperand)
    } else if (pattern === 2) {
      return this.numberToText(leftOperand)
    } else {
      return "";
    }
  }

}
