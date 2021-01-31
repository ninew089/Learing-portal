import React, { Component } from "react";
import Disqus from "disqus-react";
export default class extends Component {
  render() {
    const disqusShortname = "learn-ocsc-info-learning-portal";
    const disqusConfig = {
      url: "https://learn.ocsc.info/learning-portal",
      identifier: "learning-portal",
      title: "learning-portal",
    };

    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}
