import { Injectable } from '@angular/core'

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
}
