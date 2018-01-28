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


  });




});
