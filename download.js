import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { default as request } from 'request-promise-native'
import { writeFileSync } from 'fs'

function download(file = {uri: '', encoding: null}) {
    return async (retrieve = request.get) => {
        const buffer = await retrieve(file)
        return buffer
    }
}
    
function writeToLocal(name, buffer, writeTo = writeFileSync) {
    if(name && buffer) {
        writeTo(name, buffer)
    } else {
        throw Error('failed to provide a proper name and/or buffer')
    }
}

const pipe = (file, download, fileName, writeLocation, requestClient, writeTo) => async () => {
    const buffer = await download(file)(requestClient)
    writeLocation(fileName, buffer, writeTo)
}
const copyFileToLocal = (file, fileName, requestClient, writeTo) => pipe(
    file,
    download,
    fileName,
    writeToLocal,
    requestClient,
    writeTo
)()

export { download, writeToLocal, copyFileToLocal }