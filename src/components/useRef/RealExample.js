import MultiplesCustomHooks from '../examples/MultiplesCustomHooks'
import useToogle from '../../hooks/useToogle'

import Switcher from '../Switch/Switcher'

const RealExample = () => {
    const {state, handleToogle} = useToogle()
    return (
        <>
         { state && <MultiplesCustomHooks/>}
          <hr/>
          <Switcher handleToogle={handleToogle}/>
        </>
    )
}

export default RealExample
