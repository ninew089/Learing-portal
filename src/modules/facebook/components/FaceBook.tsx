import React, { Component } from 'react'
// @ts-ignore
import { FacebookProvider, Comments, Login } from 'react-facebook'
import { Button } from '@material-ui/core'

import 'assets/css/facebook.css'
import { FaFacebookSquare } from 'react-icons/fa'

class FacebookComponent extends Component {
  handleError = (error: any) => {
    this.setState({ error })
  }

  render() {
    return (
      <div style={{ width: `${window.screen.width}px` }}>
        <h1>Community</h1>

        <FacebookProvider appId="324263845303507">
          <Login scope="email" onError={this.handleError}>
            {({
              loading,
              handleClick,
              error,
              data,
            }: {
              loading: any
              handleClick: any
              error: any
              data: any
            }) => (
              <span onClick={handleClick}>
                {data === undefined ? (
                  <Button style={{ background: '#3b5998', color: '#f5f5f5' }}>
                    <FaFacebookSquare size={24} style={{ marginRight: 10 }} />
                    {loading ? <span>Loading...</span> : 'Login with Facebook'}
                  </Button>
                ) : (
                  ''
                )}
              </span>
            )}
          </Login>
        </FacebookProvider>
        <FacebookProvider appId="324263845303507">
          <Comments
            href="https://cubioinfo.com/course/plugins/comments#configurator"
            width="100%"
            className="fb_iframe_widget_fluid_desktop"
            data-width="100%"
          />
        </FacebookProvider>
      </div>
    )
  }
}

export default FacebookComponent
