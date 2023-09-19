import './App.css'
import { useGetAllTodosQuery } from "./redux/api/TodoApi";
import Card from "./components/Card"

export default function App() {
  const { data, error, isLoading, isFetching, refetch } = useGetAllTodosQuery();

  return (
    <main>
      <div>
        {error && <p>Something went wrong</p>}
        {isFetching && <p>fetching ...</p>}
        {isLoading && <p>Loading ...</p>}
        {data?.map((todo) => (
          <Card key={todo.id} id={todo.id} todos={todo.body} />
        ))}
      </div>
    </main>
  )
}
