import Card from "./components/Card"
import { cardsData } from "./utils/data"

export default function App() {
  return (
    <main className="w-full sm:h-screen bg-very-light-gray flex items-center justify-center">
      <div className="sm:flex sm:flex-row my-20">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  )
}
