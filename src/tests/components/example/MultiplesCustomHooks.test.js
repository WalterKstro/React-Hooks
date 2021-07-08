import { shallow } from "enzyme"
import MultiplesCustomHooks from "../../../components/examples/MultiplesCustomHooks"
import useFetch from "../../../hooks/useFetch"
jest.mock('../../../hooks/useFetch')

describe('Testing multiple custom hooks in component <MultiplesCustomHooks/>', () => {

    test('should mach with the snapshot', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true
        })
        const renderedComponent = shallow(<MultiplesCustomHooks/>)
        expect(renderedComponent).toMatchSnapshot()  
    })

    test('should show data of custom hook useFetch', () => {
        const data = {
            quote: "IFT",
            author: "Skyler White",
            series: "Breaking Bad"
        }
        useFetch.mockReturnValue({
            data: [data],
            loading: false
        })
        const renderedComponent = shallow(<MultiplesCustomHooks/>)
        const isQuote = renderedComponent.exists('Quote')
        const isLoading = renderedComponent.exists('LoadingWait')
        
        expect(isQuote).toBe(true)
        expect(isLoading).toBe(false)
        

    })
    
    
})