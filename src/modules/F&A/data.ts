import howToRegister from "assets/images/HowToRegister.webp";
export const data = [
  {
    question: "ขั้นตอนการสมัคร",
    answer: `
        <img alt="" src=${howToRegister} width="100%" height="100%"/>
        `,
  },
  {
    question: "การเข้าสู่ระบบ (Sign In)",
    answer:
      "สามารถเข้าสู่ระบบได้สองวิธี <br/>1. ใช้เลขรหัสบัตรประชาชน และรหัสผ่าน<br/>2.  ETDA Connect (เฉพาะข้าราชการพลเรือนเท่านั้น) ",
  },
  {
    question: "ลืมรหัสผ่าน ทำยังไง",
    answer: `คลิกที่ <a href="https://learn.ocsc.info/learning-portal/forget">ลืมรหัสผ่าน</a>
        <br/>
        กรอกข้อมูลเเล้วรอรับรหัสผ่านทางอีเมล
        `,
  },
];
