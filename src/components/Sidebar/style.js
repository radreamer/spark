import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  box-shadow: ${props => `2px 0 5px ${props.theme.shadowColor}`};
  background: ${props => props.theme.sidebarBackground};
  z-index: 2;
  font-size: 15px;
`

export const EmptyWrapper = styled(SidebarWrapper)`
  text-align: center;
  color: ${props => props.theme.fontColor.active};
`

export const FolderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Folder = styled.li`
  cursor: pointer;
  margin: 10px 0;
  color: ${props =>
    props.selected ? props.theme.fontColor.active : props.theme.fontColor.secondary};

  &:hover {
    opacity: 0.75;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    opacity: 0.75;
  }
`

export const Icon = styled.i`
  width: 25px;
  text-align: center;
  margin-right: 8px;
  opacity: 0.85;
`
