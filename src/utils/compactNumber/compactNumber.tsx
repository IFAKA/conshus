export const compactNumber = (nmb: number) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(nmb);
