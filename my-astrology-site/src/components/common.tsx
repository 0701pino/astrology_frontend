interface SignInfo {
  nameJp: string;
  date: string;
}

interface SignInfoDict {
  [key: string]: SignInfo;
}

export const sign_info: SignInfoDict = {
  aries: { nameJp: "牡羊座", date: "3月21日 - 4月19日" },
  taurus: { nameJp: "牡牛座", date: "4月20日 - 5月20日" },
  gemini: { nameJp: "双子座", date: "5月21日 - 6月20日" },
  cancer: { nameJp: "蟹座", date: "6月21日 - 7月22日" },
  leo: { nameJp: "獅子座", date: "7月23日 - 8月22日" },
  virgo: { nameJp: "乙女座", date: "8月23日 - 9月22日" },
  libra: { nameJp: "天秤座", date: "9月23日 - 10月22日" },
  scorpio: { nameJp: "蠍座", date: "10月23日 - 11月21日" },
  sagittarius: { nameJp: "射手座", date: "11月22日 - 12月21日" },
  capricorn: { nameJp: "山羊座", date: "12月22日 - 1月19日" },
  aquarius: { nameJp: "水瓶座", date: "1月20日 - 2月18日" },
  pisces: { nameJp: "魚座", date: "2月19日 - 3月20日" },
};
