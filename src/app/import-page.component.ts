import { Component } from '@angular/core'

import { FileReaderService } from './_service/file-reader.service'
import { cleanData, expectedFields } from './_util'

const fieldsInit = expectedFields.map(d => ({ ...d, match: null }))

@Component({
  selector: 'app-import',
  templateUrl: './import-page.component.html',
})
export class ImportPageComponent {
  data = null
  dataKeys = null
  dataRaw = null
  error = null
  fields = [...fieldsInit]
  idx = 0

  constructor(private reader: FileReaderService) {}

  handleUpload(e) {
    const files = e.target.files

    this.error = this.checkFiles(files)
    if (this.error) return

    this.reader
      .load(files[0])
      .then(this.reader.parseData)
      .then(data => this.handleData(data))
  }

  checkFiles(files) {
    const file = files[0]
    const ext = file && file.name.split('.').pop()

    if (files.length !== 1) return 'Please upload one file at a time.'
    if (!ext.includes('xls')) return 'Only Excel files can be uploaded.'
    return null
  }

  // reformat data (to array of objects)
  handleData(dataRaw) {
    const dataClean = cleanData(dataRaw)
    if (!dataClean) return

    const { keys, entries } = dataClean

    this.data = entries
    this.dataKeys = keys
    this.dataRaw = dataRaw
    this.fields = [...fieldsInit]
    this.idx = 0
  }

  downloadData() {
    this.reader.downloadData(this.dataRaw)
  }

  mapField(fieldId, importCol) {
    this.fields = this.fields.map(
      d => (d.id === fieldId ? { ...d, match: importCol } : d),
    )
  }

  seek(n) {
    this.idx += n
  }
}
