import React, { Component } from 'react'
//@ts-ignore
import { FacebookProvider, MessageUs } from 'react-facebook'

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="324263845303507">
        <MessageUs messengerAppId="109253070940022" pageId="109253070940022" />
      </FacebookProvider>
    )
  }
}
