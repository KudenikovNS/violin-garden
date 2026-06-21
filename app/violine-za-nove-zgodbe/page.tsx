import type { Metadata } from "next";
import ForSaleView from "./ForSaleView";

export const metadata: Metadata = {
  title: "Violine za nove zgodbe — naprodaj",
  description:
    "Izbrane violine iz Violinskega vrta, pripravljene nadaljevati svojo zgodbo z novim glasbenikom.",
};

export default function ZaNoveZgodbePage() {
  return <ForSaleView />;
}
