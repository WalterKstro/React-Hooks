import { shallow } from "enzyme"
import RealExample from "../../../components/useRef/RealExample"

describe('Testing component <RealExample/>', () => {
    test('should show a snaptshot of component <RealExample/>', () => {
        const rendered = shallow(<RealExample/>)
        expect(rendered).toMatchSnapshot() 
    })

    test('should show or hidden the component <RealExample/>', () => {
        const rendered = shallow(<RealExample/>)
        const isComponent = rendered.find('MultiplesCustomHooks').exists()
        const toogle = rendered.find('Switcher').exists()

        expect(isComponent).toBe(true)
        expect(toogle).toBe(true)
    })
    
    
})
