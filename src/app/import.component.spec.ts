import { TestBed, async } from '@angular/core/testing'

import { ImportComponent } from './import.component'

describe('ImportComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ImportComponent],
      }).compileComponents()
    }),
  )

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(ImportComponent)
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
    }),
  )

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(ImportComponent)
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('h1').textContent).toContain(
        'Import Excel File',
      )
    }),
  )
})
