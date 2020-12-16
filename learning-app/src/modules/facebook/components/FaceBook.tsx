import React, { Component } from 'react'
import { facebookProps } from './tyscript'
// @ts-ignore
import { FacebookProvider, Comments, Login } from 'react-facebook'
import { Button } from '@material-ui/core'
import { FaFacebookSquare } from 'react-icons/fa'
import 'assets/css/facebook.css'
class FacebookComponent extends Component {
  handleError = (error: any) => {
    this.setState({ error })
  }

  render() {
    return (
      <div style={{ width: `100%` }}>
        <h1 className="fade-in">Community</h1>

        <FacebookProvider appId="324263845303507">
          <Login scope="email" onError={this.handleError}>
            {({ loading, handleClick, error, data }: facebookProps) => (
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
            href="https://cubioinfo.com/course/community/plugins/comments#configurator"
            width="100%"
            className="fb_iframe_widget_fluid_desktop"
            data-width="100%"
            data-mobile="false"
            data-numposts="30"
          />
        </FacebookProvider>
      </div>
    )
  }
}

export default FacebookComponent
