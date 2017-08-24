import { Component } from '@angular/core'

import { FileReaderService } from './_service/file-reader.service'
import { cleanData, expectedFields } from './_util'

@Component({
  selector: 'app-import',
  templateUrl: './import-page.component.html',
})
export class ImportPageComponent {
  data = null
  dataKeys = null
  dataRaw = null
  error = null
  fields = expectedFields.map(d => ({ ...d, match: null }))

  constructor(private reader: FileReaderService) {}

  handleUpload(e) {
    const files = e.target.files
    const file = files[0]
    const ext = file.name.split('.').pop()

    if (files.length !== 1) {
      this.error = 'Only one file can be uploaded at a time.'
      return
    }

    if (!ext.includes('xls')) {
      this.error = 'Only Excel files can be uploaded.'
      return
    }

    this.error = null

    this.reader
      .load(file)
      .then(this.reader.parseData)
      .then(data => this.handleData(data))
  }

  // reformat data (to array of objects)
  handleData(dataRaw) {
    const dataClean = cleanData(dataRaw)
    if (!dataClean) return

    const { keys, entries } = dataClean

    this.data = entries
    this.dataKeys = keys
    this.dataRaw = dataRaw
  }

  downloadData() {
    this.reader.downloadData(this.dataRaw)
  }

  mapField(fieldId, importCol) {
    this.fields = this.fields.map(
      d => (d.id === fieldId ? { ...d, match: importCol } : d),
    )
  }
}
