import React, { Component } from 'react'

import { Context } from '../../context'

import { getFolders } from '../../services/api'
import { sleep } from '../../utils'

import Spinner from '../Spinner'

import { SidebarWrapper, EmptyWrapper, FolderList, Folder, Icon } from './style'

class Sidebar extends Component {
  static contextType = Context

  componentDidMount() {
    this.getFolders()
  }

  getFolders = () => {
    getFolders().then(resp => {
      sleep(1000).then(() => {
        const folders = resp.data.map((folder, i) => {
          return {
            ...folder,
            selected: i === 0,
          }
        })

        this.context.setFolders(folders)
      })
    })
  }

  onFolderListClick = e => {
    const { folders, setFolders } = this.context
    const folderEl = e.target.closest('[data-id]')

    if (folderEl) {
      const newFolders = folders.map(folder => ({
        ...folder,
        selected: folder.id === Number(folderEl.dataset.id),
      }))

      setFolders(newFolders)
    }
  }

  onFolderKeyPress = e => {
    const SPACE_KEY = 32
    const ENTER_KEY = 13

    if (e.which === SPACE_KEY || e.which === ENTER_KEY) {
      this.onFolderListClick(e)
    }
  }

  render() {
    const { folders } = this.context

    return folders && folders.length ? (
      <SidebarWrapper>
        <FolderList onClick={this.onFolderListClick} onKeyPress={this.onFolderKeyPress}>
          {folders.map(folder => (
            <Folder key={folder.id} data-id={folder.id} selected={folder.selected} tabIndex="0">
              <Icon className={`fas fa-${folder.icon}`} />
              <span>{folder.title}</span>
            </Folder>
          ))}
        </FolderList>
      </SidebarWrapper>
    ) : (
      <EmptyWrapper>
        <Spinner size={30} />
      </EmptyWrapper>
    )
  }
}

export default Sidebar
