import type { Metadata } from "next";
import CollectionView from "./CollectionView";

export const metadata: Metadata = {
  title: "Violinski vrt — zbirka violin",
  description:
    "Spoznajte zbirko violin Violinskega vrta. Vsaka violina ima svoj glas, značaj in zgodbo.",
};

export default function ViolinskiVrtPage() {
  return <CollectionView />;
}
