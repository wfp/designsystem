import styled, {css} from 'styled-components'

const height = 25
const width = 50
const gap = 2
const hue = 208

export const Toggle = styled.span`
  align-items: center;
  display: flex;
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  font-size: 13px;
  white-space: nowrap;
`

export const ToggleLabel = styled.label`
  background-color: hsl(${hue}, 0%, 51%);
  border-radius: ${height}px;
  cursor: pointer;
  display: block;
  height: ${height}px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
  width: ${width}px;

  ${props => props.checked && css`
    background-color: hsl(${hue}, 79%, 51%);
  `}
`

export const ToggleInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

export const ToggleKnob = styled.a`
  background: hsl(${hue}, 100%, 100%);
  border-radius: ${height - 2 * gap}px;
  height: ${height - 2 * gap}px;
  left: ${gap}px;
  overflow: hidden;
  position: absolute;
  text-indent: -9999px;
  top: ${gap}px;
  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out, width 0.3s ease-in-out;
  width: ${height - 2 * gap}px;

  ${ToggleInput}:active + & {
    width: ${width * 0.75 - 4 * gap}px;
  }

  ${ToggleInput}:focus + & {
    outline: #444 dotted 1px;
    outline: -webkit-focus-ring-color auto 5px;
  }

  ${props => props.checked && css`
    left: calc(100% - ${gap}px);
    transform: translateX(-100%);
  `}
`

export const ToggleMessage = styled.span`
  margin: 0 15px;
`
