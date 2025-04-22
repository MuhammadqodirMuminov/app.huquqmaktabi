import { TabsProps } from 'antd';

import { LawyersCardProps } from './components/lawyers-card';

import { Box } from '@/components';

export const LawyersMockData = [
  {
    id: 1,
    image: 'https://senat.uz/media/person/avatar/rahmanqulov_m-1677143712.jpg',
    fullName: 'Hojiakbar Rahmonqulov',
    position: 'Akademik, yuridik fanlari doktori',
    experience:
      'Akademik Hojiakbar Rahmonqulov Oʻzbekiston huquqshunoslik sohasida ulkan hissa qoʻshgan taniqli olimlardan biri boʻlib, 1925-yil 9-fevralda Chimkent viloyati, Sayram tumanida tugʻilgan va 2013-yil 17-iyulda vafot etgan. 1950-yilda Toshkent yuridik institutini tamomlaganidan soʻng, Oʻzbekiston Adliya vazirligida katta taftishchi sifatida faoliyatini boshlagan. Keyinchalik Oʻzbekiston Fanlar akademiyasi Falsafa va huquq institutida turli lavozimlarda ishlagan, jumladan, aspirant, kichik ilmiy xodim, katta ilmiy xodim, shoʻba va boʻlim mudiri, 1991-yildan esa ushbu institutning direktori sifatida faoliyat yuritgan. Bundan tashqari, Samarqand Davlat Universitetida kafedra mudiri, Oʻzbekiston Respublikasi Prezidenti devonida masʼul xodim, Oʻzbekiston Respublikasi Ichki ishlar vazirligi akademiyasida professor hamda 1999-yildan Toshkent yuridik institutida kafedra mudiri lavozimlarida ishlagan. Akademik Rahmonqulovning ilmiy faoliyati keng qamrovli boʻlib, u 60 dan ortiq monografiya va darsliklar, 300 dan ortiq ilmiy maqolalar hamda 80 ga yaqin xalqaro va respublika anjumanlaridagi maʼruzalari bilan tanilgan. U 100 dan ortiq ilmiy va oʻquv nashrlariga muharrirlik qilgan, shuningdek, 20 dan ortiq fan doktorlari va 60 dan ortiq nomzodlik dissertatsiyalariga ilmiy rahbarlik qilgan.',
  },
  {
    id: 2,
    image:
      'https://framerusercontent.com/images/KgZ4L6L81nK757VnRIwNwvJ83M.jpg',
    fullName: 'Xadicha Sulaymonovna Sulaymonova',
    position: 'Yuridik fanlari doktori',
    experience:
      "Xadicha Sulaymonovna Sulaymonova Oʻzbekiston huquqshunoslik sohasida ulkan hissa qoʻshgan taniqli olima boʻlib, 1913-yil 3-iyunda Andijon shahrida tugʻilgan. 1935-yilda Toshkent Sovet qurilishi va huquq institutining yuridik fakultetini tamomlagach, xalq sudyasi va Oʻzbekiston SSR Oliy sudi aʼzosi lavozimlarida faoliyat yuritgan. 1938-yilda Moskva yuridik institutining sovet jinoyat huquqi kafedrasi aspiranturasiga qabul qilinib, 1945-yilda 'Oʻzbekiston SSR ning harbiy intervensiya davridagi jinoyat qonunchiligi va fuqarolar urushi' mavzusida nomzodlik dissertatsiyasini himoya qilgan. 1945-yildan Toshkent yuridik institutida dotsent, keyinchalik jinoyat huquqi kafedrasi mudiri boʻlib ishlagan. 1950-yilda 'Oʻzbekistonda sovet jinoyat huquqining paydo boʻlishi va rivojlanishi' mavzusidagi doktorlik dissertatsiyasini himoya qilgan va 1952-yilda professor unvonini olgan. 1954-yilda Toshkent yuridik instituti rektori etib tayinlangan. 1956—1958-yillarda Oʻzbekiston SSR Adliya vaziri, 1959—1964-yillarda Oʻzbekiston SSR Vazirlar Soveti huzuridagi Yuridik komissiya raisi, 1964-yildan esa Oʻzbekiston SSR Oliy sudi raisi lavozimlarida ishlagan. U 1956-yilda Oʻzbekiston SSR Fanlar akademiyasining akademigi etib saylangan va 1954-yilda 'Oʻzbekistonda xizmat koʻrsatgan fan arbobi' unvoniga sazovor boʻlgan. Ilmiy faoliyatida jinoyat huquqi, huquqshunoslik fanining Oʻzbekistonda shakllanishi va rivojlanishi hamda xotin-qizlar huquqlari muammolariga alohida eʼtibor qaratgan. Uning rahbarligida jinoyat huquqi boʻyicha oʻzbek tilidagi birinchi darslik tayyorlangan. Shuningdek, 'Oʻzbekiston Sovet davlati va huquqi tarixi' kabi yirik ilmiy asarlari bilan huquq sohasida katta taʼsir koʻrsatgan. Xadicha Sulaymonova 1965-yil 26-noyabrda Toshkent shahrida vafot etgan. Uning nomi Toshkent shahridagi koʻchalardan biriga va Respublika sud ekspertiza markaziga berilgan. Shuningdek, Toshkent yuridik institutida Xadicha Sulaymonova nomidagi muzey tashkil etilgan.",
  },
  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/%D0%96%D0%B0%D0%BB%D0%BE%D0%BB%D0%BE%D0%B2.jpg/180px-%D0%96%D0%B0%D0%BB%D0%BE%D0%BB%D0%BE%D0%B2.jpg',
    fullName: 'Anvar Aʼzamovich Aʼzamxoʻjayev',
    position: 'Yuridik fanlari doktori',
    experience:
      '   Anvar Aʼzamovich Aʼzamxoʻjayev (1928-yil 17-fevral, Toshkent – 1994-yil 19-iyun) – taniqli oʻzbek huquqshunosi, davlat va jamoat arbobi, Oʻzbekiston Fanlar akademiyasi akademigi, Oʻzbekiston va Qoraqalpogʻiston Respublikasida xizmat koʻrsatgan fan arbobi, Beruniy nomidagi Oʻzbekiston Davlat mukofoti laureati. U 1943-yildan boshlab Toshkent shahridagi "Eshonguzar" mahallasida mahalla qoʻmitasi kotibi sifatida mehnat faoliyatini boshlagan. 1945–1949-yillarda Oʻrta Osiyo davlat universitetida (hozirgi Oʻzbekiston Milliy universiteti) yuridik taʼlim olgan, 1949–1951-yillarda esa Moskva davlat universiteti aspiranturasida oʻqigan. 1952–1959-yillarda Toshkent davlat universiteti yuridik fakultetida katta oʻqituvchi va dotsent, 1964–1965-yillarda ushbu universitetning prorektori lavozimida ishlagan. 1965–1966-yillarda Oʻzbekiston Respublikasi Oliy va oʻrta maxsus taʼlim vazirligi Bosh boshqarmasi boshligʻi, 1966–1970-yillarda esa vazir oʻrinbosari boʻlgan. 1971–1985-yillarda Toshkent davlat universiteti yuridik fakulteti dekani lavozimida faoliyat yuritib, yuqori malakali huquqshunos kadrlar tayyorlashda muhim rol oʻynagan. 1991–1993-yillarda Toshkent davlat yuridik institutining birinchi rektori boʻlgan.Uning jamoat faoliyati ham keng qamrovli boʻlib, 1950–1953-yillarda Toshkent shahar Kengashi deputati, 1953–1957-yillarda Toshkent shahar Shayxontohur tuman kengashi deputati, 1981–1984-yillarda esa Sobir Rahimov (hozirgi Olmazor) tumani kengashi deputati sifatida ishlagan. 1989-yilda Oʻzbekiston yuristlar uyushmasi raisi, 1993-yilda esa Oʻzbekiston Respublikasining Inson huquqlari boʻyicha Milliy qoʻmitasi raisi etib tayinlangan.Anvar Aʼzamxoʻjayev huquqshunoslik fanining rivojlanishiga katta hissa qoʻshgan boʻlib, uning tadqiqotlari davlat huquqi, milliy davlat qurilishi nazariyasi, konstitutsiyaviy va maʼmuriy huquq sohalarini qamrab olgan. U 150 dan ortiq ilmiy maqola, 40 dan ziyod darslik va monografiya muallifi boʻlib, asarlari xorijiy tillarga tarjima qilingan. Eng muhim ilmiy ishlaridan biri – “Oʻzbekiston Respublikasi davlat mustaqilligining huquqiy asoslari” 1993-yilda nashr etilgan. Oʻzbekistonda huquqiy fan rivojiga qoʻshgan hissasi uchun Oʻzbekiston va Qoraqalpogʻiston Respublikasida xizmat koʻrsatgan fan arbobi unvonlari bilan taqdirlangan, shuningdek, Beruniy nomidagi Oʻzbekiston Davlat mukofotiga sazovor boʻlgan. Anvar Aʼzamovich Aʼzamxoʻjayev 1994-yil 19-iyunda vafot etgan.',
  },
  {
    id: 4,

    image:
      'https://api.huquqmaktabi.uz/uploads/3da8ga8a3f8658g4685d74db453454fd-Screenshot%202025-04-17%20at%2010.04.08%C3%A2%C2%80%C2%AFAM.png',
    fullName: 'Ikrom Bekenovich Zokirov',
    position: 'Yuridik fanlari doktori',
    experience:
      'Ikrom Bekenovich Zokirov 1924-yil 11-sentabrda Chimkent shahrida ishchi oilasida tugʻilgan. U 1941-yilda oʻrta maktabni tugatib, 1945-yilda Toshkent yuridik institutini imtiyozli diplom bilan tamomlagan. 1947-1949-yillarda ushbu institutning "Davlat huquqi va nazariyasi" kafedrasida assistent lavozimida ishlagan. Ilmiy faoliyatini davom ettirib, 1954-yilda SSSR Fanlar Akademiyasida "Buxoro Xalq Respublikasi davlatchiligi va huquqiy maqomi" mavzusida nomzodlik dissertatsiyasini himoya qilgan. 1955-1957-yillarda Oʻrta Osiyo davlat universitetida oʻqituvchi boʻlib faoliyat yuritgan va keyinchalik Toshkent davlat universitetining "Fuqarolik huquqi va jarayoni" kafedrasida rahbarlik qilgan. 1969-yilda ushbu kafedraning mudiri etib tayinlangan. U 1979-yilda professor unvoniga sazovor boʻlib, fuqarolik huquqi sohasida yuksak ilmiy izlanishlar olib borgan. 1990-yilda "Buxoro va Xorazm xalq respublikalari fuqarolik huquqining ayrim institutlari" mavzusidagi doktorlik dissertatsiyasini himoya qilgan. 1994-2009-yillarda Toshkent davlat yuridik institutining "Fuqarolik huquqi" kafedrasi mudiri lavozimida ishlagan. 1994-yilda Oʻzbekiston Respublikasi Oliy sud Plenumi aʼzosi boʻlib tayinlangan. 1999-yilda "Faxriy ustoz" unvoniga sazovor boʻlgan. 2001-2007-yillarda Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi OAK Ekspert hayʼatining aʼzosi boʻlgan. 2005-2010-yillarda Toshkent Islom universitetida huquqiy fanlar boʻyicha dissertatsiyalar himoyasiga ilmiy rahbarlik qilgan. Ikrom Zokirovning fuqarolik huquqi boʻyicha ilmiy merosi va ustozlik faoliyati Oʻzbekiston yuridik taʼlimi rivojiga katta hissa qoʻshgan. U oʻz faoliyati davomida nafaqat yuridik fan rivojiga, balki yosh mutaxassislarni yetishtirishga ham katta eʼtibor qaratgan. Uning "Fuqarolik huquqi faqat yaxshilik uchun xizmat qiladi, sizga yaxshilik qilmaganlarga ham yaxshilik qiling" degan fikri huquqning ijtimoiy mohiyatini ochib beruvchi muhim hikmatlardan biri boʻlib qolmoqda.',
  },
];

export const LawyerItems = (user: LawyersCardProps): TabsProps['items'] => {
  console.log(user.fullName);

  return [
    {
      key: '1',
      label: 'Hayoti',
      children: <Box $p="20px">{user?.experience}</Box>,
    },
  ];
};
