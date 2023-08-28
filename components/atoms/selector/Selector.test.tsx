import Selector from './Selector'
import { render, fireEvent } from '@testing-library/react-native'

describe('Selector component', () => {
  const testSelector = (onSelectMock: jest.Mock) => {
    return render(
      <Selector
        size={20}
        quantity={3}
        color='black'
        padding={10}
        onSelect={onSelectMock}
      />
    )
  }

  it('renders correct number of circles', () => {
    const { queryAllByTestId } = testSelector(jest.fn())

    const circles = queryAllByTestId(/circle-\d+/)
    expect(circles.length).toBe(3)
  })

  it('has only one circle selected at time', () => {
    const { getByTestId, getAllByTestId } = testSelector(jest.fn())

    expect(getByTestId('selected-circle-0')).toBeTruthy()
    expect(getAllByTestId(/deselected-circle-\d+/).length).toBe(2)
  })

  it('toggles selection on press', () => {
    const { getByTestId } = testSelector(jest.fn())

    const circle0 = getByTestId('circle-0')
    const circle1 = getByTestId('circle-1')
    const circle2 = getByTestId('circle-2')

    // Default state.
    expect(getByTestId('selected-circle-0')).toBeTruthy()
    expect(getByTestId('deselected-circle-1')).toBeTruthy()
    expect(getByTestId('deselected-circle-2')).toBeTruthy()

    fireEvent.press(circle1)
    expect(getByTestId('deselected-circle-0')).toBeTruthy()
    expect(getByTestId('selected-circle-1')).toBeTruthy()
    expect(getByTestId('deselected-circle-2')).toBeTruthy()

    fireEvent.press(circle2)
    expect(getByTestId('deselected-circle-0')).toBeTruthy()
    expect(getByTestId('deselected-circle-1')).toBeTruthy()
    expect(getByTestId('selected-circle-2')).toBeTruthy()

    fireEvent.press(circle0)
    expect(getByTestId('selected-circle-0')).toBeTruthy()
    expect(getByTestId('deselected-circle-1')).toBeTruthy()
    expect(getByTestId('deselected-circle-2')).toBeTruthy()
  })
})
