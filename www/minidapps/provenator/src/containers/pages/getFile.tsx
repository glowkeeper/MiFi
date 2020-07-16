import React, { useState } from 'react'
//import { connect } from 'react-redux'

import SparkMD5 from 'spark-md5'

import Tooltip from '@material-ui/core/Tooltip'
import FileReaderInput from 'react-file-reader-input'

import Grid from '@material-ui/core/Grid'
import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
import { Okay, OptionsStyles } from '../../styles'

//import { history, getString, getKey } from '../../utils'

import { FormHelpers, GeneralError, Local, Misc, Transaction, File as FileConfig } from '../../config'

//type Props =  FileProps & FileDispatchProps

export const GetFile = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [fileName, setFileName] = useState("")
    const [hash, setHash] = useState("")

    const getFile = (e: any, results: any) => {

        //console.log(results)

        //results.forEach((result: any) => {

        //console.log(result)
        const [load, file] = results[0]
        setFileName(file.name)

        const blobSlice = File.prototype.slice
        const chunkSize = 2097152                             // Read in chunks of 2MB
        const chunks = Math.ceil(file.size / chunkSize)
        let currentChunk = 0
        let spark = new SparkMD5.ArrayBuffer()
        const fileReader = new FileReader()

        fileReader.onload = function (e) {
            //console.log('read chunk nr', currentChunk + 1, 'of', chunks);
            spark.append(e.target!.result as ArrayBuffer)                   // Append array buffer
            currentChunk++

            if (currentChunk < chunks) {
                loadNext()
            } else {
                // Compute hash
                setHash(spark.end())
                setIsLoading(false)
            }
        }

        fileReader.onerror = () => {
            setIsLoading(false)
            console.warn('oops, something went wrong')
        }

        const loadNext = () => {
            const start = currentChunk * chunkSize
            const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
        }

        loadNext()
      //})
    }

    const setLoading = () => {
        setFileName("")
        setHash("")
        setIsLoading(!isLoading)
    }

    return (
      <>
        <h2>{FileConfig.headingFile}</h2>
        <hr />
        <FileReaderInput
          as="binary"
          id="fileInput"
          onChange={getFile}
        >
            <Tooltip title={FileConfig.fileTip}>
                <Okay onClick={setLoading} type='submit' variant="contained" color="primary" disabled={isLoading} endIcon={<RightCircleOutlined spin={isLoading}/>}>
                  {FileConfig.getFile}
                </Okay>
            </Tooltip>
        </FileReaderInput>
        <p>
            {FileConfig.fileName}: {fileName}
        </p>
        <p>
            {FileConfig.hash}: {hash}
        </p>
      </>
    )
}
