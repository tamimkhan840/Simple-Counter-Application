

function Counters({onCounters, onIncrement, onDecrement}) {
  return (
    <div className="w-[400px] mx-auto bg-white shadow-xl text-center mt-5 p-2">
        <div><span className="font-bold text-xl my-3">{onCounters}</span></div>
        <div className="flex justify-center items-center">
            <button onClick={onIncrement} className="p-3 mt-4 bg-green-600 my-3 mx-2">Increment</button>
            <button onClick={onDecrement} className="p-3 mt-4 bg-red-600 my-3 ">Decrement</button>
        </div>
    </div>
  )
}

export default Counters
