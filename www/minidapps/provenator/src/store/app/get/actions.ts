import { ethers } from 'ethers'

import { write } from '../../actions'
import {
    AppDispatch,
    TransactionActionTypes,
    GetActionTypes,
    TxData,
    DataProps } from '../../types'

import { Transaction } from '../../../config'

export const initialise = () => {
  return async (dispatch: AppDispatch, getState: Function) => {
    await dispatch(write({data: []})(GetActionTypes.GET_INIT))
  }
}

export const getData = (url: string) => {
  return async (dispatch: AppDispatch, getState: Function) => {

       let d = new Date(Date.now())
       let dateText = d.toString()
       let txData: TxData = {
           code: 404,
           summary: `${Transaction.errorGettingData}}: Failed to fetch at ${dateText}`,
           info: {}
       }

       //const url = `${Remote.insecure}${Remote.server}:${Remote.port}${Remote.jobsAll}`
       fetch(url, {
         method: 'GET',
       })
       .then(response => {
         if (!response.ok) {
             const status = response.status
             const statusText = response.statusText
             return response.json()
             .then(data => {
                 const txData = {
                     code: status,
                     summary: `${Transaction.errorGettingData}: ${statusText} at ${dateText}`,
                     info: data
                 }
                 throw new Error(statusText)
             })
         }
         return response.json()
       })
       .then(data => {
           dispatch(write({data: Array.of(data)})(GetActionTypes.GET_SUCCESS))
       })
      .catch(error => {
           console.log(`${Transaction.errorGettingData}: ${error.message} at ${dateText}`)
           dispatch(write({data: txData})(TransactionActionTypes.TRANSACTION_FAILURE))
      })
  }
}
