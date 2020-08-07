import { write } from '../../actions'

import { ethers } from 'ethers'

import {
    AppDispatch,
    FileProps } from '../../types'

import { Transaction, Scripts } from '../../../config'
import { setBytes32 } from '../../../utils'

export const addFile = (props: FileProps) => {
  return async (dispatch: AppDispatch) => {

      //console.log(props)
      const fileScript = Scripts.addFile


     // dispatch(write({data: {}})(TransactionActionTypes.TRANSACTION_SUCCESS))

  }
}
