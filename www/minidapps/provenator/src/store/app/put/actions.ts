import { write } from '../../actions'

import { ethers } from 'ethers'

import {
    AppDispatch,
    FileProps,
    TransactionActionTypes,
    TxData } from '../../types'

import { Transaction } from '../../../config'
import { setBytes32 } from '../../../utils'

export const addFile = (props: FileProps) => {
  return async (dispatch: AppDispatch, getState: Function) => {

      const state = getState()
      const jobsContract = state.chainContracts.data.contracts.jobs
      const provider = state.chainInfo.data.provider

      let txData = {
          transaction:  -1,
          summary: '',
          info: {
              time: ''
          }
      }

     let d = new Date(Date.now())
     try {

        //console.log("dispatching write: ", jobRef, workRef, infoRef, createInfoWriter)
        const tx = await jobsContract.addInfo(props)
        txData = {
            transaction:  tx.hash,
            summary: `${Transaction.pending}`,
            info: {
                time: d.toString()
            }
        }
        dispatch(write({data: txData})(TransactionActionTypes.TRANSACTION_PENDING))

        const receipt = await provider.waitForTransaction(tx.hash)
        d = new Date(Date.now())
        txData = {
            transaction:  tx.hash,
            summary: `${Transaction.success}`,
            info: {
                time: d.toString()
            }
        }
        dispatch(write({data: txData})(TransactionActionTypes.TRANSACTION_SUCCESS))

      } catch (error) {

        d = new Date(Date.now())
        txData = {
            transaction:  -1,
            summary: `${Transaction.failure}`,
            info: {
                time: d.toString()
            }
        }
        dispatch(write({data: txData})(TransactionActionTypes.TRANSACTION_FAILURE))
      }
  }
}
