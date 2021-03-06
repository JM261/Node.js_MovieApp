import React from 'react'
import { Comment, Tooltip, Avatar } from 'antd'


function Review() {

  return (
    <Comment>
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}1</span>
        </Tooltip>
      }
    </Comment>
  )
}

export default Review