import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('App component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('Has 1 child', async () => {
    const tree = renderer.create(<App />)
    expect(tree.root.children.length).toBe(1)
  })
})
