
import { render, screen } from '@testing-library/react';
import CartItems from './CartItems';


describe('CartItems', () => {


    test('renders CartItems component', () => {
        
    render(<CartItems />)

    expect(screen.getByText('Proceed to CheckOutPage')).toBeInTheDocument()

    expect(screen.getByText('Clear Cart items')).toBeInTheDocument()

    expect(screen.getByText(/Subtotal/)).toBeInTheDocument()

    })



});