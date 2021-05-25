import CounterCustonHook from "./components/CounterCustonHook/CounterCustonHook"

// import Conter from "./components/Conter/Conter"
const App = () => {
    return (
        <div className="container">
        <CounterCustonHook initialState={100}/>
        </div>
    )
}

export default App
