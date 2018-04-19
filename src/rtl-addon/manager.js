import React from 'react'
import addons from '@storybook/addons'
import RTLPanel from './containers/RTLPanel'
import {ADDON_ID, PANEL_ID} from './constants'

addons.register(ADDON_ID, (api) => {
const channel = addons.getChannel()
addons.addPanel(PANEL_ID, {
  title: 'RTL',
  render: () => <RTLPanel channel={channel} api={api} />
})
})
