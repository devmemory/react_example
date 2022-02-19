require('dotenv').config()
const formidable = require('formidable');
const express = require('express');
const fs = require('fs');

const router = express.Router();

const storageUrl = process.env.FILE_PATH

router.get('/get-imglist', (req, res) => {
    let imgList = []

    try {
        fs.readdirSync(storageUrl).forEach((file) => {
            imgList = [...imgList, file]
        })
    } catch (e) {
        res.send({ code: -1, data: `Get file list error : ${e}` })
        return
    }

    console.log(imgList)

    if(imgList.length === 0){
        console.log('no image')
        res.send({code: -1, data: 'There is no saved image'})
        return
    }

    res.send({ code: 1, data: imgList })
})

router.get('/:url', (req, res) => {
    const url = req.params.url

    if (fs.existsSync(`${storageUrl}${url}`)) {
        fs.readFile(`${storageUrl}${url}`, (err, data) => {
            res.end(data)
        })
    } else {
        return res.send(`No file exists : ${url}`)
    }
})

router.post('/upload', (req, res) => {
    console.log('upload')
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        console.log({ fields, files })
        try {
            const oldPath = files.file.filepath
            const newPath = storageUrl + files.file.newFilename + `.${fields.type}`

            console.log({ oldPath, newPath })

            fs.copyFile(oldPath, newPath, (err) => {
                if (err) throw err;
                res.write('File uploaded')
            })

            res.send({ data: { fields, files }, code: 1 });

        } catch (e) {
            res.send({ data: `Image upload failed : ${e}`, code: -1 })
        }
    });
})

module.exports = router