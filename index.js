import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/react'

const code = ({ className, children }) => {
  if (className === 'language-cssx') {
    return (
      <Global
        styles={css`
          ${children}
        `}
      />
    )
  }

  return <code>{children}</code>
}

export default ({ children, components }) => (
  <MDXProvider components={{ ...components, code }}>{children}</MDXProvider>
)