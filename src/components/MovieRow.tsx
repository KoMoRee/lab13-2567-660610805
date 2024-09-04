import { IconStar } from "@tabler/icons-react";
import { movieRowProbs } from "@lib/types";

import Link from "next/link";

export default function MovieRow({ id, title, rating, number }: movieRowProbs) {
  return (
    <div className="d-flex justify-content-between gap-3">
      <Link href={"/movie/" + id}>
        {number}. {title}
      </Link>
      <span className="text-primary fw-bold">
        <IconStar /> {rating}
      </span>
    </div>
  );
}
