import type { ResortListing } from "../data/data";
export default function ResortsCard({
    pic,
    country,
    location,
    rating,
    price,
}: ResortListing) {
  return (
    <div className="ResortsCard">
      <img src={pic} alt="" width="140px" />
      <p className="country">{country}</p>
      <p className="location">{location}</p>
      <p className={rating > 4.0 ? "rating" : "low-rating"}>{rating}★</p>
      <p className="price">${price}/night</p>
    </div>
  );
}
