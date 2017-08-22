import { Component } from '@angular/core'

import { FileReaderService } from './_service/file-reader.service'
import { cleanData, COLUMNS } from './_util'

@Component({
  selector: 'app-import',
  templateUrl: './import-page.component.html',
})
export class ImportPageComponent {
  cols = COLUMNS
  data = null
  dataKeys = null
  dataRaw = null
  idx = 0

  constructor(private reader: FileReaderService) {}

  loadFile(e) {
    const files = e.target.files

    if (files.length !== 1) {
      console.log('Cannot upload multiple files on the entry')
      return
    }

    this.reader
      .load(files[0])
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
    this.idx = 0
  }

  downloadData() {
    this.reader.downloadData(this.dataRaw)
  }

  seek(n) {
    this.idx += n
  }
}
