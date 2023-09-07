/* eslint-disable unicorn/consistent-function-scoping */
import { render, waitFor } from '@testing-library/react'
import { type NextRouter, useRouter } from 'next/router'
import type { ReactNode } from 'react'

import { Meta } from './meta.component'

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return props.children
    },
)

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

const mockedUseRouter = useRouter as jest.MockedFunction<() => Partial<NextRouter>>

describe('Meta component', () => {
  describe('Render method', () => {
    mockedUseRouter.mockReturnValue({
      basePath: '',
      push: jest.fn(),
      replace: jest.fn(),
    })

    it('should a page title', async () => {
      const title = 'Random title'

      render(<Meta title={title} description="Random description" />)

      await waitFor(() => {
        expect(document.title).toEqual(title)
      })
    })
  })
})
