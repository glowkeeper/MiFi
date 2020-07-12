import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import shortid from 'shortid'
import { ethers } from 'ethers'

import * as Yup from 'yup'

import Select, {components} from 'react-select'
import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import { LinearProgress, FormControl } from '@material-ui/core'
import { TextField } from "material-ui-formik-components"

import Grid from '@material-ui/core/Grid'
import { Okay, OptionsStyles } from '../../styles'

import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'

import { history, getString, getKey } from '../../utils'

import { initialise as txInitialise } from '../../store/app/tx/actions'
import { TxHelper } from '../../components/tx/apiTxHelper'

import {
    ApplicationState,
    AppDispatch,
    PayloadProps,
    TxData } from '../../store/types'

import { FormHelpers, GeneralError, Local, Misc, Transaction, File as FileConfig } from '../../config'

const addFilSchema = Yup.object().shape({
  file: Yup.string()
    .required(`${GeneralError.errorRequired}`)
})

interface FileProps {
  info: TxData
}

interface FileDispatchProps {
  txInit: () => void
}

type Props =  FileProps & FileDispatchProps

const File = (props: Props) => {

    const [isSubmitting, setSubmit] = useState(false)
    const [summary, setSummary] = useState("")

    useEffect(() => {

        const txSummary: string = props.info.summary
        if( isSubmitting && txSummary != summary ) {
            setSummary(txSummary)
            if( txSummary == Transaction.success || txSummary == Transaction.failure ) {
                setSubmit(false)
                setTimeout(() => {
                    history.push(`${Local.home}`)
                }, Misc.delay)
            }
        }
    })

    return (
      <>
        <h2>{FileConfig.headingFile}</h2>
        <hr />
        <h3>{FileConfig.FileDetails}</h3>
        <TxHelper/>
      </>
    )
}

//<Okay type='submit' variant="contained" color="primary" disabled={isSubmitting} endIcon={<RightCircleOutlined spin={isSubmitting}/>}>

const mapStateToProps = (state: ApplicationState): FileProps => {
  //console.log(state.orgReader)
  return {
    info: state.tx.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): FileDispatchProps => {
  return {
    txInit: () => dispatch(txInitialise())
  }
}

//handleSubmit: (values: any) => void
//handleSubmit: (values: any) => dispatch(addFile(values))

export const FormFile = connect<FileProps, FileDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(File)
