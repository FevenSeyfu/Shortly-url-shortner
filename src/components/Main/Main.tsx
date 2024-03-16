import AdvancedStatistics from "./AdvancedStatistics"
import ShortnerForm from "./ShortnerForm"

const Main:React.FC = () => {
  return (
    <main className="bg-neutral-gray w-full h-full flex flex-col items-center mt-12 ">
        <ShortnerForm />
        <AdvancedStatistics />
    </main>
  )
}

export default Main