import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { default as request } from 'request-promise-native'
import { writeFileSync } from 'fs'

export function fileDownloader(writeTo = writeFileSync) {
    return async (options = {uri: '', encoding: null}, outputFilename = './download') => {
        const pdfBuffer = await request.get(options)
        writeTo(outputFilename, pdfBuffer)
        return true
    }
}