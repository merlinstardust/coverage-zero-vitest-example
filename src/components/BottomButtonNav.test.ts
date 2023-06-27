import { render, screen } from '@testing-library/vue';
import BottomButtonNav from '~/components/BottomButtonNav.vue';

describe('BottomButtonNav', () => {
  it('renders left and right slots correctly', () => {
    const leftSlotContent = 'Left Slot Content';
    const rightSlotContent = 'Right Slot Content';

    render(BottomButtonNav, {
      slots: {
        leftSide: leftSlotContent,
        rightSide: rightSlotContent,
      },
    });

    const leftContainer = screen.getByTestId('left-container');
    const rightContainer = screen.getByTestId('right-container');

    expect(leftContainer).toHaveTextContent(leftSlotContent);
    expect(rightContainer).toHaveTextContent(rightSlotContent);
  });
});
