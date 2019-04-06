import React, { Component } from 'react'

import { Context } from '../../context'

import { getMails } from '../../services/api'
import { sleep } from '../../utils'

import Spinner from '../Spinner'

import {
  MailsListWrapper,
  EmptyListWrapper,
  Mail,
  NewMail,
  Head,
  From,
  Date,
  Subject,
  Content,
  EmptyIcon,
} from './style'

class MailsList extends Component {
  static contextType = Context

  state = {
    isFetching: true,
    prevSelectedFolderId: null,
  }

  componentDidUpdate() {
    const { prevSelectedFolderId } = this.state
    const { folders } = this.context
    const selectedFolder = folders.length && folders.find(folder => folder.selected)

    if (selectedFolder && selectedFolder.id !== prevSelectedFolderId) {
      this.requestMails(selectedFolder)
    }
  }

  requestMails = selectedFolder => {
    const { setMails } = this.context

    this.setState({
      isFetching: true,
      prevSelectedFolderId: selectedFolder.id,
    })

    getMails().then(resp => {
      sleep(1000).then(() => {
        this.setState({
          isFetching: false,
        })

        const mails = resp.data.filter(mail => mail.relatedFolderId === selectedFolder.id)

        setMails(mails)
      })
    })
  }

  onMailsListClick = e => {
    const { mails, setMails } = this.context
    const mailEl = e.target.closest('[data-id]')

    if (mailEl) {
      const newMails = mails.map(mail => ({
        ...mail,
        read: mail.id === Number(mailEl.dataset.id) ? true : mail.read,
        selected: mail.id === Number(mailEl.dataset.id),
      }))

      setMails(newMails)
    }
  }

  onMailsKeyPress = e => {
    const ENTER_KEY = 13

    if (e.which === ENTER_KEY) {
      this.onMailsListClick(e)
    }
  }

  render() {
    const { isFetching } = this.state
    const { mails } = this.context

    if (isFetching)
      return (
        <EmptyListWrapper>
          <Spinner size={30} />
        </EmptyListWrapper>
      )

    return mails && mails.length ? (
      <MailsListWrapper>
        <ul onClick={this.onMailsListClick} onKeyDown={this.onMailsKeyPress}>
          {mails.map(mail => (
            <Mail key={mail.id} data-id={mail.id} selected={mail.selected} tabIndex="0">
              {!mail.read && <NewMail />}
              <Head>
                <From>{mail.from}</From>
                <Date>{mail.date}</Date>
              </Head>
              <Subject>{mail.subject}</Subject>
              <Content>{mail.content}</Content>
            </Mail>
          ))}
        </ul>
      </MailsListWrapper>
    ) : (
      <EmptyListWrapper>
        <EmptyIcon className="fas fa-folder-open" />
        Folder is empty
      </EmptyListWrapper>
    )
  }
}

export default MailsList
