import { render } from '@testing-library/react'
import { Home } from '../pages/Home'

describe('Home', () => {
  it('should render the Learn More section', () => {
    const { getByTestId } = render(<Home />)
    const learnMoreSection = getByTestId('learn-more-section')
    expect(learnMoreSection).toBeInTheDocument()
  })
  
  it('should render the Hero section', () => {
    const { getByTestId } = render(<Home />)
    const heroSection = getByTestId('heros-section')
    expect(heroSection).toBeInTheDocument()
  })

  it('should render the about us section', () => {
    const { getByTestId } = render(<Home />)
    const contactUsSection = getByTestId('contact-us-section')
    expect(contactUsSection).toBeInTheDocument()
  })

  it('should render the reviews section', () => {
    const { getByTestId } = render(<Home />)
    const testimonialSection = getByTestId('testimonial-section')
    expect(testimonialSection).toBeInTheDocument()
  })
})