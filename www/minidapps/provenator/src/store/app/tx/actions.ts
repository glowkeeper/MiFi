import { ApplicationState, ActionProps, PayloadProps, AppDispatch, TransactionActionTypes, TxData } from '../../types'
import { write } from '../../actions'

export const initialise = () => {
  return async (dispatch: AppDispatch) => {
    const initData: TxData = {
        code: 0,
        summary: "",
        info: {}
    }
    await dispatch(write({data: initData})(TransactionActionTypes.TRANSACTION_INIT))
  }
}
