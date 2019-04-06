import React, { Component } from 'react'

import { Context } from '../../context'

import { ContentWrapper, EmptyContentWrapper, Toolbar, Button } from './style'

class Content extends Component {
  static contextType = Context

  state = {
    prevSelectedMailId: null,
    mail: null,
  }

  componentDidUpdate() {
    const { prevSelectedMailId } = this.state
    const { mails } = this.context
    const selectedMail = mails.length && mails.find(mail => mail.selected)

    if (selectedMail && selectedMail.id !== prevSelectedMailId) {
      this.setState({
        prevSelectedMailId: selectedMail.id,
        mail: selectedMail,
      })
    }
  }

  toggleReadStatus = () => {
    const { mails, setMails } = this.context
    const { mail } = this.state
    const newMails = mails.map(m => {
      return {
        ...m,
        read: m.id === mail.id ? !m.read : m.read,
      }
    })

    setMails(newMails)

    this.setState(state => ({
      mail: {
        ...mail,
        read: !state.mail.read,
      },
    }))
  }

  deleteMail = () => {
    const { mails, setMails } = this.context
    const { mail } = this.state
    const newMails = mails.filter(m => m.id !== mail.id)

    setMails(newMails)

    this.setState({
      prevSelectedMailId: null,
      mail: null,
    })
  }

  render() {
    const { mail } = this.state

    return mail ? (
      <ContentWrapper>
        <Toolbar>
          <Button onClick={this.toggleReadStatus}>Mark as {mail.read ? 'unread' : 'read'}</Button>
          <Button onClick={this.deleteMail}>Delete</Button>
        </Toolbar>
        <div dangerouslySetInnerHTML={{ __html: mail.html }} />
      </ContentWrapper>
    ) : (
      <EmptyContentWrapper>No Message Selected</EmptyContentWrapper>
    )
  }
}

export default Content
