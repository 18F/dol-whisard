import { TestBed, async } from '@angular/core/testing'

import { ImportPageComponent } from './import-page.component'
import { FileReaderService } from './_service/file-reader.service'

describe('ImportPageComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ImportPageComponent],
        providers: [FileReaderService],
      }).compileComponents()
    }),
  )

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(ImportPageComponent)
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('h1').textContent).toContain(
        'Import Excel File',
      )
    }),
  )
})
