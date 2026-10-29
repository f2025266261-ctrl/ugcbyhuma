export const FEATURED_WORK = [
  {
    title: "Viral Reels",
    reels: [
      "DD_NGtpINpX",
      "DUdSTRZjTO5",
      "DXotKLTxUbb",
      "DeWZSJzRqYm",
      "DVTSZsaDBjo",
      "DNQJ4o0tIR2"
    ]
  },
  {
    title: "Hair Care",
    reels: [
      "DVqiMdSMTMP",
      "DcOY-RAAzGR",
      "DeEzNbjxbLY",
      "DerbGEBRIl3",
      "DbhhIXiofmQ"
    ]
  },
  {
    title: "Skin Care",
    reels: [
      "DdQe7hEtdUA",
      "Dc-6ulwgZir",
      "DYTr0IXtlbS",
      "DWyFg-IDU83",
      "DWbveFBjYV1"
    ]
  },
  {
    title: "Ad Generated Content",
    reels: [
      "DYWns2ztqH_",
      "DdlHLm_xyGm",
      "DeME_SqNp8g",
      "DWs4l42jVfw",
      "DeYpZkWxrHV"
    ]
  }
];

export function normalizeReelItem(item) {
  if (typeof item === "string") {
    return {
      id: item,
      thumbnail: null,
      permalink: `https://www.instagram.com/reel/${item}/`,
      embedUrl: `https://www.instagram.com/reel/${item}/embed/`
    };
  }
  return {
    id: item.id,
    thumbnail: item.thumbnail || null,
    permalink: `https://www.instagram.com/reel/${item.id}/`,
    embedUrl: `https://www.instagram.com/reel/${item.id}/embed/`
  };
}

