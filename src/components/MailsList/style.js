import styled, { css } from 'styled-components'

export const MailsListWrapper = styled.div`
  flex: 2;
  background: ${props => props.theme.mailsListBackground};
  box-shadow: ${props => `2px 0 5px ${props.theme.shadowColor}`};
  overflow-y: auto;
  z-index: 1;
`

export const EmptyListWrapper = styled(MailsListWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: ${props => props.theme.fontColor.active};
`

export const EmptyIcon = styled.i`
  font-size: 30px;
`

export const Mail = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-bottom: ${props => `1px solid ${props.theme.shadowColor}`};
  background: ${props => (props.selected ? 'white' : 'transparent')};
  box-shadow: ${props => (props.selected ? `0 0px 5px ${props.theme.shadowColor}` : 'none')};
  padding: 14px 24px;

  &:hover {
    opacity: 0.75;
  }

  &:focus {
    outline: none;
    opacity: 0.75;
    border-bottom: ${props => `1px solid ${props.theme.fontColor.active}`};
  }
`

export const NewMail = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.fontColor.active};
  position: absolute;
  top: 20px;
  left: 10px;
`

export const Head = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 5px;
`

export const From = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${props => props.theme.fontColor.primary};
`

export const Date = styled.span`
  font-size: 10px;
  color: ${props => props.theme.fontColor.secondary};
`

const overflowEllipsis = numVisibleLines => css`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${numVisibleLines};
  -webkit-box-orient: vertical;
`

export const Subject = styled.p`
  font-size: 12px;
  color: ${props => props.theme.fontColor.primary};
  margin: 0;
  margin-bottom: 3px;
  ${overflowEllipsis(1)};
`

export const Content = styled.p`
  font-size: 11px;
  color: ${props => props.theme.fontColor.secondary};
  margin: 0;
  ${overflowEllipsis(2)};
`
