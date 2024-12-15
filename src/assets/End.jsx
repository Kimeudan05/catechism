import React, { useState } from "react";

const End = () => {
  // State to manage visibility of each section
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 space-y-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600">
        MAUNDO ANGI
      </h1>

      <ul className="list-disc pl-5 space-y-2">
        <li className="text-lg">1. Uikianio wa Ikanisa</li>
        <li className="text-lg">2. Witikilo wa Atūmwa</li>
        <li className="text-lg">3. Mboya ya Mwiai</li>
        <li className="text-lg">4. Miao Īkūmi</li>
      </ul>

      {/* Section 1 */}
      <h2
        className="text-2xl font-semibold text-indigo-500 cursor-pointer"
        onClick={() => toggleSection(1)}
      >
        1. ŪĪKIANIO WA IKANISA
      </h2>
      {openSection === 1 && (
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Kwa kwithiwa nitûsyaitwe îngi na mumo wa Ngai kati wa Müikiio üla wi
            nthini wa Yesű Klisto, tükitalwa kwithiwa atheu kwondū wa nthakame
            yake ila yetikie nthi, tūkyumbūla müikiio witū mbee wa andū, na mbee
            wa Ngai, na mbee wa ikomano yii, yu. ithyi nitūūlika üīkianioni ūū
            na kikio na ngoo ya kwenda. kila ümwe na üla ūngi ta mwii ūmwe
            nthini wa Klisto.
          </p>
          <p>
            Kwoondū wa ūu ithyī nitwiyumasya kwa vinya wa Veva Mütheu. kütethya
            wia vainwe wendoni wa Aklisto, kūtata na vinya kwondū wa kūtwaīša na
            mbee Ikanisa yake kati wa ūmanyi, na ütheu na mùuo. Nitwiyumasya
            kūimithya Ikanisa maūndūni ma Veva; kūwīkalya na kūsūvia ūthaithi,
            na mawalany o na müendo mütheu, na momanyīsyo ma Mbivilia Kūnengane
            na ūtanu mavinda onthe kwoondū wa kūkwatīła wia wa Ngai, kütethya
            ngya, na kūnyaiīkya Üvoo Mūseo mbaini syonthe.
          </p>
          <p>
            Vamwe na ūu, nitwiyumasya kwithiwa na ivoyo sya mūsyi na sya mündü e
            weka: kumanyīsya syana sitū Ndeto sya Ngai na kūmantha ündü andū
            maîtū na atindany'a maitu matonya kwona ūtangiio. Kwa mumo na vinya
            wa Ngai ta twi aeni na aendi ma kyalo, tükeevathana na kūtia mawendi
            ma mwii.
          </p>
        </div>
      )}

      {/* Section 2 */}
      <h2
        className="text-2xl font-semibold text-indigo-500 cursor-pointer"
        onClick={() => toggleSection(2)}
      >
        2. Witikilo wa Atūmwa
      </h2>
      {openSection === 2 && (
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Nyie ningwitikila Ngai asa Mwene Vinya W'onthe, Mümbi wa Itu na
            nthi, na Yesu Masia, Mwana wake e ümwe, Mwlai waitü, üla wekiwe
            îvuni ni Veva Mütheu, asyaiwe ni Mwlitu Meli. Niwathiniw'e yīla
            vondio Vilato waī mūsumbi, niwambiwe, na akw'a akithikwa, akilika
            vala maveva ma ala akw'u, mekalaa, na Müthenya wa katatü akisyūka
            akyuma akw'uni, akyambata îtunī, nivo üilyi ngali ya kw'oko kwa aŭme
            kwa Ithe Ngai, Mwene vinya w'onthe. Nīvo ükauma asilile ala me thayũ
            na ala akw'u.
          </p>
          <p>
            Nyie ningwitikila Veva Mütheu, ümbano wa etikili ala ma w'o na
            müamba woo üekeo wa mavityo, üsyūko wa mwil na thayũ Otathela.
            Ameni.
          </p>
        </div>
      )}

      {/* Section 3 */}
      <h2
        className="text-2xl font-semibold text-indigo-500 cursor-pointer"
        onClick={() => toggleSection(3)}
      >
        3. OVOYO WA MWIAÏI YESÜ
      </h2>
      {openSection === 3 && (
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Asa waitü, üa wî îtunī, syïtwa yaku yītaïwe, üsumbi waku wüke Kwenda
            kwaku kwikwe küü nthi, o ta küya Itunī. Tünenge ümünthi liu witü
            ütwianie. Naku ütüekee mathii maitů, o tondu ithyi naitü tümaekeete
            ala me na thiî naitu.
          </p>
          <p>
            Na ndükatūtwae ūtatwani, îndī ūtūtangile kwa ūla müthüku. Nündü
            üsümbī na vinya na ndaĩa nī syaku tene na tene. Ameni.
          </p>
        </div>
      )}

      {/* Section 4 */}
      <h2
        className="text-2xl font-semibold text-indigo-500 cursor-pointer"
        onClick={() => toggleSection(4)}
      >
        4. Miao Ikümi
      </h2>
      {openSection === 4 && (
        <div className="text-lg leading-relaxed space-y-4">
          <ul className="list-decimal pl-6 space-y-2">
            <li>Ndūkaaïthiwe na Ngai ingi ateo Nyie...</li>
            <li> Ndūkaaïseūvīsye müvw'anano mwasūvye...</li>
            <li>Ndūkaaīvīte na syitwa ya Mwiaïi Ngai waku mana...</li>
            <li> Lilikana Müthenya wa Savato üwīkalye wī mütheu</li>
            <li> Mūtaïe au na mwenyu; nî kana matuků maku mongeleke...</li>
            <li> Ndūkaaŭae</li>
            <li> Ndūkaalaalae</li>
            <li> Ndūkaaûye</li>
            <li> Ndūkaamüküsiīle mütüi waku ündü üte w'o..</li>
            <li> Ndūkaaîthiwe na müthemba o na wīva wa itomo</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default End;
