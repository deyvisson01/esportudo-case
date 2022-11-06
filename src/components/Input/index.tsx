import Image from 'next/image'
import React, { FC, InputHTMLAttributes, useRef } from 'react'

import { Container, Content, TitleInput, ErrorCaption } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  defaultValue?: string
  width?: string
  error?: string
  icon?: any
  optional?: any
}

const Input: FC<InputProps> = ({
  title,
  error,
  icon,
  width,
  optional,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef(null)

  const inputWidth = width ? width : '100%'

  return (
    <Container style={{ width: inputWidth }}>
      {title && (
        <TitleInput>
          <p>{title}</p>
          {optional && <small>(opcional)</small>}
        </TitleInput>
      )}
      <Content isErrored={!!error}>
        {icon && (
          <>
            <Image
              alt="Input Icon"
              src={icon}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </>
        )}
        <input ref={inputRef} value={defaultValue} {...rest} />
      </Content>
      {error && <ErrorCaption>{error}</ErrorCaption>}
    </Container>
  )
}

export default Input
