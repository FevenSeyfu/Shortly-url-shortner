import { useState } from "react"
import AdvancedStatistics from "./AdvancedStatistics"
import ShortnerForm from "./ShortnerForm"
import Result from "./Result";

interface Url {
  id: number;
  longUrl: string;
  shortUrl: string;
}

const Main: React.FC = () => {
  const [urls, setUrls] = useState<Url[]>([]);

  const handleAddUrl = (newUrl: Url) => {
    setUrls([...urls, newUrl]);
  };

  return (
    <div className="container mx-auto">
      <ShortnerForm onAddUrl={handleAddUrl} />
      <Result urls={urls} />
    </div>
  );
};

export default Main;