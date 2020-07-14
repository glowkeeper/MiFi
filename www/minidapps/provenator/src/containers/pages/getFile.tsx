import React, { CSSProperties, useState } from 'react'
import { connect } from 'react-redux'

import { keccak256 } from 'js-sha3'

import Tooltip from '@material-ui/core/Tooltip'
import FileReaderInput from 'react-file-reader-input'

import Grid from '@material-ui/core/Grid'
import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
import { Okay, OptionsStyles } from '../../styles'

import { history, getString, getKey } from '../../utils'

import { FormHelpers, GeneralError, Local, Misc, Transaction, File as FileConfig } from '../../config'

//type Props =  FileProps & FileDispatchProps

const inputStyle: CSSProperties = {
  display: 'none',
}

export const GetFile = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [fileName, setFileName] = useState("")
    const [hash, setHash] = useState("")

    const getFile = (e: any, results: any) => {
      //console.log(result)
      results.forEach((result: any) => {
        const [thisProgressEvent, file] = result
        const buffer = Buffer.from(thisProgressEvent.target.result)
        const hash = keccak256(buffer)
        const fileName = file.name
        setFileName(fileName)
        setHash(hash)
      })
      setIsLoading(!isLoading)
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
