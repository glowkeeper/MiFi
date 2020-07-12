import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import { Info} from '../components/pages'
import { FormFile } from '../containers/pages/'

import { Paths, Local } from '../config'

export const Content = () => {

    return (

      <Switch>
        <Route name={Paths.home} exact path={Local.home} render={() => <Info type={InfoTypes.HOME}/>} />
        <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />
        <Route name={Paths.help} path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.faq} path={Local.faq} render={() => <Info type={InfoTypes.FAQ}/>} />
        <Route name={Paths.contact} path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />

        <Route name={Paths.file} path={Local.file} render={() => <FormFile />} />
      </Switch>
    )
}
