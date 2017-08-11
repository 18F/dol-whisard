import { Component } from '@angular/core'
import { saveAs } from 'file-saver'
import * as XLS from 'xlsx'

import { FileReaderService } from './_service/file-reader.service'
import { s2ab, COLUMNS } from './_util'

const { aoa_to_sheet, book_append_sheet, book_new, sheet_to_json } = XLS.utils

@Component({
  selector: 'app-import',
  templateUrl: './import-page.component.html',
})
export class ImportPageComponent {
  cols = COLUMNS
  data = null
  idx = 0

  constructor(private reader: FileReaderService) {}

  loadFile(e) {
    const files = e.target.files

    if (files.length !== 1) {
      console.log('Cannot upload multiple files on the entry')
      return
    }

    this.reader.load(files[0]).then(data => this.parseFile(data))
  }

  parseFile(bstr) {
    // read workbook
    const wb = XLS.read(bstr, { type: 'binary' })

    // get first sheet
    const wsname = wb.SheetNames[0]
    const ws = wb.Sheets[wsname]

    // save data
    const data = sheet_to_json(ws, { header: 1 })
    console.log('data: ', data)

    this.data = data
    this.idx = 0
  }

  downloadData() {
    // generate worksheet
    const ws = aoa_to_sheet(this.data)

    // generate workbook and add the worksheet
    const wb = book_new()
    book_append_sheet(wb, ws, 'Sheet1')

    // save workbook locally
    const wbout = XLS.write(wb, { bookType: 'xlsx', type: 'binary' })
    saveAs(new Blob([s2ab(wbout)]), 'output.xls')
  }

  seek(n) {
    this.idx += n
  }
}
