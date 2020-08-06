import { write } from '../../actions'

import { ethers } from 'ethers'

import {
    AppDispatch,
    FileProps,
    TransactionActionTypes,
    TxData } from '../../types'

import { Transaction, Scripts } from '../../../config'
import { setBytes32 } from '../../../utils'

export const addFile = (props: FileProps) => {
  return async (dispatch: AppDispatch) => {

      //console.log(props)
      const fileScript = Scripts.addFile

      let txData = {
          transaction:  -1,
          summary: '',
          info: {
              time: ''
          }
      }

      //this.data.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";

     let d = new Date(Date.now())
     try {

        //console.log("dispatching write: ", jobRef, workRef, infoRef, createInfoWriter)
        //const tx = await jobsContract.addInfo(props)
        const tx = { hash: 0}
        txData = {
            transaction:  tx.hash,
            summary: `${Transaction.pending}`,
            info: {
                time: d.toString()
            }
        }
        dispatch(write({data: txData})(TransactionActionTypes.TRANSACTION_PENDING))

        //const receipt = await provider.waitForTransaction(tx.hash)
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
