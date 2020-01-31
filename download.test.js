import { fileDownloader } from './download'

describe('fileDownloader can download desired file successfully', () => {
    const fileUrls = ['https://www.riversource.com/content/files/111661.PDF']

    test('downloadFile downloads a pdf', async() => {
        const downloader = fileDownloader()
        try {
            const x = await downloader({uri: fileUrls[0], encoding: null}, './testPdfFile.PDF')
            expect(x).toBe(true)
        } catch(e) {
            throw new Error(e)
        }
    })

})