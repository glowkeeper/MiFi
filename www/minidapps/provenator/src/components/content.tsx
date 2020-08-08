import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import { BlockchainInfo, Info } from '../components/pages'
import { AddFile } from '../containers/pages/'

import { Paths, Local } from '../config'

export const Content = () => {

    return (

      <Switch>
        <Route name={Paths.blockchain} exact path={Local.blockchain} render= {() => <BlockchainInfo />} />
        <Route name={Paths.about} exact path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.faq} exact path={Local.faq} render={() => <Info type={InfoTypes.FAQ}/>} />
        <Route name={Paths.contact} exact path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />
        <Route name={Paths.home} path={Local.home} render= {() => <AddFile />} />
      </Switch>
    )
}
