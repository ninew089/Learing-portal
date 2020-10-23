import React, { Component } from 'react'
//@ts-ignore
import { FacebookProvider, Page } from 'react-facebook'

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Page
          href="https://www.facebook.com/ศูนย์รวมหลักสูตรรายวิชาที่เรียนรู้ทางสื่ออิเล็กทรอนิกส์-109253070940022/?_rdc=1&_rdr"
          tabs="timeline"
        />
      </FacebookProvider>
    )
  }
}
