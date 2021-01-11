import howToRegister from "assets/images/HowToRegister.jpg"
export const data = [
    {
        question: "ขั้นตอนการสมัคร",
        answer: `
        <img alt="" src=${howToRegister} width="100%" height="100%"/>
        
        ` 
    },
    {
        question: "การล็อคอิน",
        answer:"สามารถล็อคอินได้สองวิธี <br/>1. ล็อคอินจากเว็บโดยตรง <br/>2. ล็อคอินผ่าน edta connect "
    },
    {
        question: "ถ้ามี Edta อยู่เเล้ว",
        answer:"สามารถล็อคอินผ่าน edta ได้เลยค่ะ "
    },
    {
        question: "เกิดข้อผิดพลาด 500 คือ อะไร",
        answer:"เกิดจากปัญหาทาง serve กรุณาติดแอดมินให้รีบทำการแก้ไข"
    },
    {
        question: "ลืมรหัสผ่าน ทำยังไง",
        answer: `คลิกในลิงค์นี้เลยค่ะ <a href="https://learn.ocsc.info/learning-portal/forget">ลืมรหัสผ่าน</a>
        <br/>
        จากนั้นกรอกข้อมูลให้ครบถ้วนรหัสจะทำการส่งไปทางเมลล์ 
        `
    },
]