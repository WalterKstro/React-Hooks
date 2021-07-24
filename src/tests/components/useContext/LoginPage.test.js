import { mount } from "enzyme"
import LoginPage from "../../../components/useContext/LoginPage"
import UserContext from "../../../components/useContext/UserContext"

describe('Testing in component <LoginPage/>', () => {
    let component
    let user
    let setState

    beforeEach(() => {
        user = {
            id: '#5684564654894798',
            username: '@kstro',
            email: 'walterkstro@gmail.com'
        }
        setState = jest.fn()
        
        component = mount(

            <UserContext.Provider value={{
                    setState
                }}>
                    <LoginPage/>
            </UserContext.Provider>
        )
    })

    test('should show correctly the component <LoginPage/>', () => {
          expect(component).toMatchSnapshot()
    })

    test('should call the function setState with the argument user', () => {
        const button = component.find('button').simulate('click')

        expect(setState).toHaveBeenCalledWith(user)
    })
    
    
})
