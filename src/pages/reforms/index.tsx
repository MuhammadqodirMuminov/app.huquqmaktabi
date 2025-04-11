import { Back, Box } from '@/components';
import { Wrapper } from '@/modules';
import { Typography } from 'antd';

const Reforms = () => {
  return (
    <Wrapper hasBodyPadding={false} bg="#f7f7f7">
      <Box
        $bg="var(--white)"
        $sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
      >
        <Back label={'Yuridik Sohalar'} />
      </Box>
      <Box $p="0px 20px" $gap="20px" $align="center" $direction="column">
        <Typography.Title style={{ textAlign: 'center' }}>
          Hozirgi huquqiy islohotlar va ularning mazmun-mohiyati
        </Typography.Title>
        <Typography.Text>
          Oʻzbekiston Respublikasida huquqiy islohotlar mustaqillikning
          dastlabki yillaridan boshlab izchil davom ettirilmoqda. Huquqiy davlat
          va fuqarolik jamiyatini shakllantirish yoʻnalishida amalga
          oshirilayotgan islohotlar qonun ustuvorligini taʼminlash, inson huquq
          va erkinliklarini himoya qilish, sud-huquq tizimini takomillashtirish
          hamda davlat boshqaruvining samaradorligini oshirishga qaratilgan.
          Bugungi kunda amalga oshirilayotgan huquqiy islohotlar quyidagi asosiy
          yoʻnalishlarga ajratiladi. Birinchidan, sud-huquq tizimini
          mustahkamlash boʻyicha keng koʻlamli islohotlar amalga oshirilmoqda.
          Sud hokimiyatining mustaqilligini taʼminlash va adolatli sudlov
          tizimini yoʻlga qoʻyish maqsadida Oliy sud va Oliy xoʻjalik sudi
          birlashtirildi, shuningdek, maʼmuriy sudlar, iqtisodiy sudlar va
          jinoyat ishlari boʻyicha sudlarning faoliyati takomillashtirildi.
          Jinoyat qonunchiligini liberallashtirish doirasida qator jinoyatlarga
          nisbatan yengilliklar kiritildi, oqlov instituti kengaytirildi hamda
          jazoni yengillashtirish tamoyillari kuchaytirildi. Shuningdek,
          “Ex-sud.uz” tizimi joriy etilib, sud jarayonlarining ochiqligi va
          shaffofligi taʼminlandi. Ikkinchidan, inson huquqlari va
          erkinliklarini himoya qilish tizimi mustahkamlanmoqda. Oʻzbekiston
          inson huquqlari boʻyicha xalqaro konvensiyalarga qoʻshilib, bu
          boradagi milliy qonunchilikni takomillashtirmoqda. Inson huquqlari
          boʻyicha Ombudsman instituti kuchaytirildi, shuningdek, qiynoq va
          inson huquqlarini buzish holatlarining oldini olishga qaratilgan
          islohotlar amalga oshirilmoqda. Xalqaro hamkorlik doirasida BMTning
          Inson huquqlari kengashi bilan hamkorlik mustahkamlanib, fuqarolarning
          huquq va erkinliklarini kafolatlash boʻyicha qator qonun hujjatlari
          qabul qilindi. Uchinchidan, davlat boshqaruvi va maʼmuriy islohotlar
          amalga oshirilmoqda. Davlat organlarining ochiqligi va xalq bilan
          muloqotini yaxshilash maqsadida “Xalq qabulxonalari” tizimi joriy
          qilindi. Maʼmuriy islohotlar doirasida davlat xizmatlarini
          elektrlashtirish va byurokratiyani qisqartirish choralari koʻrilmoqda.
          Raqamlashtirish jarayonlari tezlashib, davlat xizmatlarining
          aksariyati onlayn koʻrinishga oʻtkazildi. Toʻrtinchidan, iqtisodiy va
          tadbirkorlik huquqlarini himoya qilish borasida islohotlar olib
          borilmoqda. Xususiy mulk himoyasi mustahkamlanib, tadbirkorlarning
          huquqiy kafolatlari oshirilmoqda. “Biznes yuritish” indeksida
          Oʻzbekistonning oʻrnini yaxshilash maqsadida litsenziyalash va
          ruxsatnomalar berish jarayonlari soddalashtirildi. Investorlar
          huquqlarini himoya qilish borasida xalqaro huquq normalariga mos
          qonunchilik ishlab chiqildi va xorijiy sarmoyadorlar uchun qulay
          huquqiy muhit yaratildi. Beshinchidan, korrupsiyaga qarshi kurash
          boʻyicha islohotlar amalga oshirilmoqda. 2020-yilda “Korrupsiyaga
          qarshi kurashish agentligi” tashkil etilib, davlat xizmatida ochiqlik
          va shaffoflikni taʼminlashga qaratilgan chora-tadbirlar kuchaytirildi.
          Elektron davlat xaridlari tizimi yoʻlga qoʻyilib, manfaatlar
          toʻqnashuvining oldini olish mexanizmlari ishlab chiqildi.
          Oltinchidan, huquqiy madaniyat va fuqarolik jamiyatini
          rivojlantirishga katta eʼtibor qaratilmoqda. Aholining huquqiy ongini
          oshirish maqsadida yuridik taʼlim va huquqiy targʻibot kengaytirildi.
          Fuqarolik jamiyati institutlari rivojlanib, nodavlat notijorat
          tashkilotlari va ommaviy axborot vositalarining huquqiy mavqei
          mustahkamlanmoqda. Shunday qilib, Oʻzbekistonda olib borilayotgan
          huquqiy islohotlar qonun ustuvorligini taʼminlash, inson huquqlarini
          himoya qilish va davlat boshqaruvining samaradorligini oshirishga
          qaratilgan. Islohotlarning asosiy maqsadi – demokratik huquqiy davlat
          va kuchli fuqarolik jamiyatini barpo etishdir.
        </Typography.Text>
      </Box>
    </Wrapper>
  );
};

export default Reforms;
