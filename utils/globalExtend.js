import path from 'node:path'
import url from 'node:url'

Object.defineProperties(global, {
  // 入参 import.meta.url ，等价于cjs的__fileName
  getFileName: {
    get() {
      return (importUrl) => url.fileURLToPath(importUrl)
    }
  },
  // 入参 import.meta.url ，等价于cjs的__dirName
  getDirName: {
    get() {
      return (importUrl) => path.dirname(url.fileURLToPath(importUrl))
    }
  }
})