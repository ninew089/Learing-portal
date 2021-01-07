export default function category(id) {
  const catagory = [
     {
    logo: "https://learn.ocsc.info/learning-portal/static/media/Logo/ocsc.jpg",
    name: "สํานักงาน ก.พ. (OCSC)",
  },
     {
    logo: "https://learn.ocsc.info/learning-portal/static/media/Logo/chula.jpg",
    name: "มหาลัยจุฬาลงกรณ์",
  }
     
  

  ];
  return catagory[id-1];
}

