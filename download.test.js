import { download, writeToLocal, copyFileToLocal } from './download'

describe('fileDownloader can download desired file successfully', () => {
    const fileUrls = ['https://www.riversource.com/content/files/111661.PDF']

    test('download returns a file as a buffer', async() => {
        const file = {uri: fileUrls[0], encoding: null}
        const client = async() => {return new Buffer.from('data')}
        try {
            const buffer = await download(file)(client)
            expect(Buffer.isBuffer(buffer)).toBe(true)
        } catch(e) {
            throw new Error(e)
        }
    })

    test('writeToLocal writes data to location', () => {
        const buffer = new Buffer.from('data')
        try {
            writeToLocal('test', buffer, () => {})
        } catch(e) {
            throw new Error(e)
        }
    })

    test('writeToLocal throws error', () => {
        expect(() => writeToLocal()).toThrowError('failed to provide a proper name and/or buffer')
    })

    test('downloadFile downloads a pdf', async() => {
        try {
            const mockWriteToLocal = async () => {}
            const fileName = './testPdfFile.PDF'
            const file = {uri: fileUrls[0], encoding: null}
            const client = async() => {return new Buffer.from('data')}
            copyFileToLocal(file, fileName, client, mockWriteToLocal)
        } catch(e) {
            throw new Error(e)
        }
    })

})