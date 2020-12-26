export default function category(id) {
   if (id === 'หลักสูตร') {
      return 'หลักสูตร'
   }
   const catagory=     ['การบริหารงาน ก.พ.',
   'การบริหารทรัพยากรบุคคล',
   'กฎหมายและระเบียบราชการ',
   'การเขียนหนังสือราชการ',
   'ทักษะทางสังคม (Soft Skill)',
   'ทักษะด้านดิจิทัล',
   'ทักษะด้านภาษา',]
    return catagory[id]
  }
  