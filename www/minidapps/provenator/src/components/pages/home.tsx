import React from 'react'

import { GetFile } from '../../containers/pages/'

import { themeStyles } from '../../styles'

import { Paths, Local } from '../../config'

export const Home = () => {

  const themeClasses = themeStyles()

  return (
     <>
         <GetFile />
    </>

  )
}
