import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  static readonly INDEX_THRESHOLD = 5;

  passwordToggle = false;
  actionsLog: { dt: Date; action: string }[] = [];

  changePasswordToggle(): void {
    this.actionsLog.push({dt: new Date, action: this.getAction(this.passwordToggle)})
    this.passwordToggle = !this.passwordToggle;
  }

  isLogThresholdReached(index: number): boolean {
    return index >= AppComponent.INDEX_THRESHOLD;
  }

  private getAction(toggle: boolean): string {
    return toggle ? 'show password' : 'hide password';
  }

}
