import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe("Captcha", () => {
    let FIRST_PATTERN = 1;
    let SECOUND_PATTERN = 2;
    let INVALID_PATTERN = 99;



    describe("Number to String", () => {
      it("should return 1 as string when put 1", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(1);
        expect(result).toEqual("1");

      });

      it("should return 9 as string when put 9", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(9);
        expect(result).toEqual("9");

      });

      it("should return 0 as string when put 0", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(0);
        expect(result).toEqual("0");

      });
      it("should return 7 as string when put 7", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(7);
        expect(result).toEqual("7");

      });

      it("should return 8 as string when put 8", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(8);
        expect(result).toEqual("8");
      });

      it("should return 2 as string when put 2", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(2);
        expect(result).toEqual("2");
      });
      it("should return 3 as string when put 3", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(3);
        expect(result).toEqual("3");
      });
      it("should return 4 as string when put 4", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(4);
        expect(result).toEqual("4");
      });
      it("should return 5 as string when put 5", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(5);
        expect(result).toEqual("5");
      });
      it("should return 6 as string when put 6", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToString(6);
        expect(result).toEqual("6");
      });

    });

    describe("Number to Operand", () => {
      it("Should return plus when put 1", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToOperand(1);
        expect(result).toEqual("+");
      });

      it("Should return minus when put 2", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToOperand(2);
        expect(result).toEqual("-");
      });

      it("Should return multiply when put 3", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToOperand(3);
        expect(result).toEqual("*");
      });

      it("Should return divide when put 4", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToOperand(4);
        expect(result).toEqual("/");
      });

      it("Should return EMPTY string when input is not 1-4", () => {
        const component = TestBed.createComponent(AppComponent);
        let result = component.componentInstance.numberToOperand(5);
        expect(result).toEqual("");
      });


    });

    describe("Number to Text", () => {
      let textOfNumberMockup = { 0: "ZERO", 1: "ONE", 2: "TWO", 3: "THREE", 4: "FOUR", 5: "FIVE", 6: "SIX", 7: "SEVEN", 8: "EIGHT", 9: "NINE" };

      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => {

        it("Should return " + textOfNumberMockup[0] + " when put " + num, () => {
          const component = TestBed.createComponent(AppComponent);
          let result = component.componentInstance.numberToText(num);
          expect(result).toEqual(textOfNumberMockup[num]);
        });


      });

    });

    describe("Left operand", () => {

      it("should return empty string when pattern is not 1 or 2", () => {
        const component = TestBed.createComponent(AppComponent);

        let result = component.componentInstance.getLeftOperand(INVALID_PATTERN, 1);
        expect(result).toEqual("");
      });

      describe("First pattern", () => {

        it("should call numberToString", () => {
          const component = TestBed.createComponent(AppComponent);
          spyOn(component.componentInstance, "numberToString");

          component.componentInstance.getLeftOperand(FIRST_PATTERN, 1);
          expect(component.componentInstance.numberToString).toHaveBeenCalledWith(1);
        });

        it("should return 1 when put 1", () => {
          const component = TestBed.createComponent(AppComponent);

          let result = component.componentInstance.getLeftOperand(FIRST_PATTERN, 1);
          expect(result).toEqual("1");
        });

      });

      describe("Secound pattern", () => {
        it("should call numberToText", () => {
          const component = TestBed.createComponent(AppComponent);
          spyOn(component.componentInstance, "numberToText");

          component.componentInstance.getLeftOperand(SECOUND_PATTERN, 1);
          expect(component.componentInstance.numberToText).toHaveBeenCalledWith(1);
        });

        it("should return ONE when put 1", () => {
          const component = TestBed.createComponent(AppComponent);

          let result = component.componentInstance.getLeftOperand(SECOUND_PATTERN, 1);
          expect(result).toEqual("ONE");
        });
      });
    });

  });




});
