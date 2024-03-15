import AdvancedStatistics from "./AdvancedStatistics"
import ShortnerForm from "./ShortnerForm"

const Main:React.FC = () => {
  return (
    <div className="bg-neutral-gray w-full h-full">
        <ShortnerForm />
        <AdvancedStatistics />
    </div>
  )
}

export default Main