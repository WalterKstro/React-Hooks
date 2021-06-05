import ExampleStateEffect from '../examples/ExampleStateEffect'
import useToogle from '../../hooks/useToogle'

import Switcher from '../Switch/Switcher'

const RealExample = () => {
    const {state, handleToogle} = useToogle()
    return (
        <>
         { state && <ExampleStateEffect/>}
          <hr/>
          <Switcher handleToogle={handleToogle}/>
        </>
    )
}

export default RealExample
