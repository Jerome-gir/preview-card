import Card from "./components/Card"
import { cardsData } from "./utils/data"

export default function App() {
  return (
    <main className="w-full h-screen bg-very-light-gray flex items-center justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </main>
  )
}
