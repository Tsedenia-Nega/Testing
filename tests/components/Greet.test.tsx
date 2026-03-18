import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';
describe('group',()=>{
    it('should render hello with the name ',()=>{
        render(<Greet name='john'/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
       expect(heading).toHaveTextContent('Hello john');
     }) 
 it("should render login when name is not provided ", () => {
   render(<Greet name="" />);
   const button = screen.getByRole("button");
   expect(button).toBeInTheDocument();
   expect(button).toHaveTextContent(/login/i);
 }); 

    })

    