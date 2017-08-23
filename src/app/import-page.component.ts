import { Component } from '@angular/core'

import { FileReaderService } from './_service/file-reader.service'
import { cleanData, expectedFields } from './_util'

@Component({
  selector: 'app-import',
  templateUrl: './import-page.component.html',
})
export class ImportPageComponent {
  fields = expectedFields.map(d => ({ ...d, match: null }))
  error = null
  data = null
  dataKeys = null
  dataRaw = null

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

  handleData(dataRaw) {
    // reformat data (to array of objects)
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

  mapField(a, b) {
    console.log(a, b)
  }
}
