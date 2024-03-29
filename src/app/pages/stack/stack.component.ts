import {Component, ViewChild} from '@angular/core';
import {AnimationComponent} from "./animation/animation.component";

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  @ViewChild('animationComponent')
  animationComponent: AnimationComponent;

  handlePushEvent() {
    if (this.animationComponent.activeAnimation === false) {
      this.animationComponent.activeAnimation = true;
      this.animationComponent.drawRectangle();
    }
  }

  handlePopEvent() {
    if (this.animationComponent.activeAnimation === false) {
      this.animationComponent.activeAnimation = true;
      this.animationComponent.popFromStack();
    }
  }

  handlePeekEvent() {
    if (this.animationComponent.activeAnimation === false) {
      this.animationComponent.peekGoingUp = true;
      this.animationComponent.activeAnimation = true;
      this.animationComponent.peekFromStack();
    }
  }
}
