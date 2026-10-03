import ResortsCard from "./ResortsCard";
import type { ResortListing } from "../data/data";

interface ResortContainerProps {
  data: ResortListing[];
}
export default function ResortsContainer({ data }: ResortContainerProps) {
  return (
    <div className="ResortsContainer">
      {data.map((list) => (
        <ResortsCard key={list.id} {...list} />
      ))}
    </div>
  );
}
