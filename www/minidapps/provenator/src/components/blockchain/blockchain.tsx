import React from 'react'

import { init, addAddress } from '../../store/app/blockchain/actions'

export const ChainInit = async (dispatch: any) => {

    dispatch(init())
    dispatch(addAddress())
 }
