import AdvancedStatistics from "./AdvancedStatistics"
import ShortnerForm from "./ShortnerForm"

const Main:React.FC = () => {
  return (
    <div className="bg-neutral-gray w-full h-full flex flex-col items-center mt-12">
        <ShortnerForm />
        <AdvancedStatistics />
    </div>
  )
}

export default Main