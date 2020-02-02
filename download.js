import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { default as request } from 'request-promise-native'
import { writeFileSync } from 'fs'

// export function download(outputFilename = './download', writeTo = writeFileSync) {
//     return async (options = {uri: '', encoding: null}, asyncFetcher = request.get) => {
//         const fileBuffer = await asyncFetcher(options)
//         writeTo(outputFilename, fileBuffer)
//         return true
//     }
// }

function download(uri, encoding = null) {
    return async (client = request.get) => {
        const buffer = await client({uri: uri, encoding: encoding})
        return buffer
    }
}

function writeToLocal(name, buffer, writeTo = writeFileSync) {
    if(name && buffer) {
        writeTo(name, buffer)
    }
}

export { download, writeToLocal }