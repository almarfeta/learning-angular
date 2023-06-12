import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name: string = "Almar";
  public exampleId: string = "anId";
  public idDisabled: boolean = true;
  public counter: number = 0;
  public email: string = "email";
  public color: string = "";
  public colors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  @Input('parentData') title: string = "";
  @Output() public childEvent = new EventEmitter();
  public person = {
    firstName: "John",
    lastName: "Doe"
  };
  public date = new Date();

  onClickCount() {
    this.counter++;
  }

  alertMessage(message: string) {
    alert(message);
  }

  assignColor(color: string) {
    this.color = color;
  }

  fireEvent() {
    this.childEvent.emit('Hello from child');
  }
}
