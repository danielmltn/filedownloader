import { download, writeToLocal } from './download'

describe('fileDownloader can download desired file successfully', () => {
    const fileUrls = ['https://www.riversource.com/content/files/111661.PDF']

    // test('downloadFile downloads a pdf', async() => {
    //     const downloader = fileDownloader('./testPdfFile.PDF')
    //     try {
    //         const x = await downloader({uri: fileUrls[0], encoding: null})
    //         expect(x).toBe(true)
    //     } catch(e) {
    //         throw new Error(e)
    //     }
    // })

    // test('downloadFile downloads a pdf', async() => {
    //     try {
    //         const buffer = await download(fileUrls[0])()
    //         expect(Buffer.isBuffer(buffer)).toBe(true)
    //         writeToLocal('./testPdfFile.PDF', buffer)
    //     } catch(e) {
    //         throw new Error(e)
    //     }
    // })

    test('downloadFile downloads a pdf', async() => {
        try {
            const mockWriteToLocal = (name) => console.log('writing ' + name)
            const fileName = './testPdfFile.PDF'
            const pipe = (arg1, arg2) => () => arg2(fileName, arg1(fileUrls[0]))
            const copyFileToLocal = pipe(
                download,
                writeToLocal
            )
            copyFileToLocal()
        } catch(e) {
            throw new Error(e)
        }
    })

})