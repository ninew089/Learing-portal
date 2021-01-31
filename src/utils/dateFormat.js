export function formatDate(s) {
  const res = s.split(" ");
  const m = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const dm = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const mm = m.indexOf(res[1]);
  const yy = parseInt(res[2]) - 543;
  const newDate = `${yy}-${dm[mm]}-${res[0]}`;
  return newDate;
}

export function formatDatetoThai(date) {
  const datetime = new Date(date).toLocaleDateString();
  const res = datetime.split("/");
  const m = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const mm = parseInt(res[0]);
  const yy = parseInt(res[2]) + 543;
  const newDate = `${res[1]} ${m[mm - 1]} พ.ศ.${yy}`;
  return newDate;
}
export function formatDatetoThaiTest(date) {
  const res = date.split("-");
  const m = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const mm = parseInt(res[1]);
  const yy = parseInt(res[0]) + 543;
  const day = res[2].split("T00:00:00");
  const newDate = `${day[0]} ${m[mm - 1]} พ.ศ.${yy}`;
  return newDate;
}
