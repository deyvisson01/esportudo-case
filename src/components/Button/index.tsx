import React, { FC } from 'react'

import Image from 'next/image'
import loadingIcon from '../../assets/load.svg'
import { Container } from './styles'

type Props = {
  background?: any
  type?: string
  disabled?: boolean
  children: string
  loading?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({
  background,
  type,
  disabled,
  children,
  loading,
  onClick
}) => {
  const isLoading = loading
  const isDisabled = loading || disabled

  return (
    <>
      <Container background={background}>
        <button
          disabled={isDisabled}
          onClick={onClick}
          className={`${type} ${disabled ? ' disabled' : ''}`}
        >
          {isLoading ? (
            <>
              <Image
                alt="Next.js logo"
                src={loadingIcon}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </>
          ) : (
            children
          )}
        </button>
      </Container>
    </>
  )
}

export default Button
