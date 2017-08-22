import { Injectable } from '@angular/core'
import { saveAs } from 'file-saver'
import * as XLS from 'xlsx'

import { s2ab } from '../_util'

const { aoa_to_sheet, book_append_sheet, book_new, sheet_to_json } = XLS.utils

@Injectable()
export class FileReaderService {
  load(file) {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
      reader.onload = (e: any) => resolve(e.target.result)
      reader.onerror = () => reject(this)
      reader.readAsBinaryString(file)
    })
  }

  parseData(bstr, sheetNum = 0) {
    // read workbook
    const wb = XLS.read(bstr, { type: 'binary' })

    // get first sheet
    const wsname = wb.SheetNames[sheetNum]
    const ws = wb.Sheets[wsname]

    // convert to array of arrays
    const data = sheet_to_json(ws, { header: 1 })
    console.log('raw worksheet data: ', data)

    return data
  }

  downloadData(data, fname = 'output.xls') {
    // generate worksheet
    const ws = aoa_to_sheet(data)

    // generate workbook and add the worksheet
    const wb = book_new()
    book_append_sheet(wb, ws, 'Sheet1')

    // save workbook locally
    const wbout = XLS.write(wb, { bookType: 'xlsx', type: 'binary' })
    saveAs(new Blob([s2ab(wbout)]), fname)
  }
}
