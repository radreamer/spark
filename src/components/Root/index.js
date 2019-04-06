import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from '../../context'

import Sidebar from '../Sidebar'
import MailsList from '../MailsList'
import Content from '../Content'

import { main } from '../../themes'
import { AppWrapper } from './style'

class App extends Component {
  state = {
    folders: [],
    mails: [],
  }

  setFolders = folders => {
    this.setState({ folders })
  }

  setMails = mails => {
    this.setState({ mails })
  }

  render() {
    const { folders, mails } = this.state

    return (
      <ContextProvider
        value={{
          folders,
          setFolders: this.setFolders,
          mails,
          setMails: this.setMails,
        }}>
        <ThemeProvider theme={main}>
          <AppWrapper>
            <Sidebar />
            <MailsList />
            <Content />
          </AppWrapper>
        </ThemeProvider>
      </ContextProvider>
    )
  }
}

export default App
