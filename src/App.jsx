import { useDispatch, useSelector } from "react-redux";
import Counters from "./Components/Counters"
import TotalCount from "./Components/TotalCount"
import { decrement, increment } from "./features/Counters/CountersSlice";


// const initialCounters =[
//   {
//     id: 1,
//     value: 0
//   },
//   {
//     id: 2,
//     value: 0
//   },
//   {
//     id: 3,
//     value: 0
//   }
// ]
function App() {
  // const [counters, setCounters] = useState(initialCounters)

  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch();
  const totalCount = counters.reduce((sum, item) => sum + item.value, 0)

  const handleIncrement = (id) =>{
    dispatch(increment(id))
  }

  const handleDecrement = (id) =>{
    dispatch(decrement(id))
  }


  return (
    <>
    <div className="bg-slate-100 h-screen p-5">
       <div className="font-semibold text-center text-2xl">
        <h1>Simple Counter Application</h1>
       </div>
       <div>
        {
          counters.map(c => <Counters
              key={c.id}
              onCounters={c.value}
              onIncrement={() =>handleIncrement(c.id)}
              onDecrement={() =>handleDecrement(c.id)}
             />)
        }
       </div>


      <div>
        <TotalCount onTotalCount={totalCount}/>
      </div>
    </div>
    </>
  )
}

export default App
