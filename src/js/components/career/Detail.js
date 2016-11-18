import React from "react";

export default class Detail extends React.Component {
  render() {
    const { title } = this.props;
    const content = { __html: this.props.content };

    return (
      <div class="job-detail">
        <div class="title">
          {title}
        </div>
        <ul dangerouslySetInnerHTML={content} />
      </div>
    );
  }
}
