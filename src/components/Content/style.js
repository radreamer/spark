import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 4;
  padding-top: 55px;
  background: ${props => props.theme.contentBackground};
  position: relative;
  overflow-y: auto;
`

export const EmptyContentWrapper = styled(ContentWrapper)`
  align-items: center;
  color: ${props => props.theme.fontColor.active};
`

export const Toolbar = styled.div`
  width: 100%;
  height: 35px;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px;
  background: ${props => props.theme.sidebarBackground};
  top: 0;
  left: 0;
  box-shadow: ${props => `0 2px 5px ${props.theme.shadowColor}`};
`

export const Button = styled.button`
  border: 1px solid;
  padding: 5px;
  background: transparent;
  color: ${props => props.theme.fontColor.secondary};
  cursor: pointer;
  margin: 0 5px;
  border-radius: 3px;

  &:hover {
    color: ${props => props.theme.fontColor.active};
  }
`
