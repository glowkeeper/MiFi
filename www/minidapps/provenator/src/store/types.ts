import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { NavLink } from 'react-router-dom'

// Store stuff
export interface ApplicationState {
  chainInfo: ChainDataProps,
  info: InfoPageProps
  data: GetProps
}

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}

export type AppDispatch = ThunkDispatch<ApplicationState, any, ActionProps>

// Blockchain info
export interface ChainDataProps extends PayloadProps {
  data: {
    hexAccount: string
    account: string
  }
}

// Info (about etc.) stuff
export const enum InfoTypes {
  HOME = "home",
  ABOUT = "about",
  HELP = "help",
  FAQ = "faq",
  CONTACT = "contact"
}

export interface InfoPageProps extends PayloadProps {
  data: InfoData
}

export interface InfoProps {
  title: string
  data: string
}

export interface InfoData {
  home: InfoProps
  about: InfoProps
  help: InfoProps
  faq: InfoProps
  contact: InfoProps
}

// Extra info stuff
export interface FileProps {
    fileHash: string
}

export interface FileInfoProps {
    fileInfo: Array<FileProps>
}

// Get data stuff
export type DataProps = object

export interface GetProps extends PayloadProps {
    data: Array<DataProps>
}

// Actiontypes stuff
export const enum GetActionTypes {
  GET_INIT = '@@GetActionTypes/GET_INIT',
  GET_SUCCESS = '@@GetActionTypes/GET_SUCCESS',
  GET_FAILURE = '@@GetActionTypes/GET_FAILURE'
}

export const enum TransactionActionTypes {
  TRANSACTION_INIT = '@@TransactionActionTypes/TRANSACTION_INIT',
  TRANSACTION_PENDING = '@@TransactionActionTypes/TRANSACTION_PENDING',
  TRANSACTION_SUCCESS = '@@TransactionActionTypes/TRANSACTION_SUCCESS',
  TRANSACTION_FAILURE = '@@TransactionActionTypes/TRANSACTION_FAILURE'
}

export const enum ChainDataActionTypes {
  ADD_DATA = '@@ChainInfoAction/ADD_DATA'
}
