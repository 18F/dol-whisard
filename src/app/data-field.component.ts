import { Component, EventEmitter, Input, Output } from '@angular/core'

// invoked in parent via:
//
// <div class='my2 p2 container mx-auto bg-white'>
//   <app-data-field
//     *ngFor="let col of cols"
//     [field]="col"
//     (onChanged)="onChanged($event)">
//   </app-data-field>
// </div>

@Component({
  selector: 'app-data-field',
  template: `
    <h3>{{ field.name }}</h3>
    <select (change)="update($event.target.value)">
      <option>---</option>
      <option>abc</option>
      <option>def</option>
    </select>
  `,
})
export class DataFieldComponent {
  @Input() field
  @Output() onChanged = new EventEmitter()

  update(value: string) {
    const payload = { id: this.field.id, value }
    this.onChanged.emit(payload)
  }
}
