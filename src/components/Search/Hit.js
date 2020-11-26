import React from 'react'
import PropTypes from 'prop-types'

import Post from '../Post'

const Hit = props => {
  const { hit } = props
  console.log(hit);
  return (
    <Post
      slug={hit.slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      main_class={hit.main_class}
    />
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit
