import React, { useState } from "react";

const Introduction = () => {
  // State to manage the visibility of the section content
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open and close the section
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 space-y-6">
      <h2
        className="text-2xl font-semibold text-indigo-500 cursor-pointer"
        onClick={toggleSection}
      >
        NDETO SYA KÜMÜTONGOESYA MÜMANYISYA WA KILASI
      </h2>

      {isOpen && (
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Kila műmanyiw'a e vata wa kwithīwa na Mbivilia na Ivükü ya
            Momanyisyo ma Kilasi. Mūmanyīsya wa Kilasi amwony'e kila mümanyiw'a
            ündü wa ūvua Mbivilia misoa îla înenganītwe ya kūsomwa momanyisyoni
          </p>
          <p>
            Kila mūmanyiw'a e vata wa kūmanya ūsūngio wa kila ikūlyo, na ndeto
            sya mûsoa wa mbee üla ūnenganītwe kwondū wa kūsomwa. Mūmanyïsya
            vamwe na amanyïw'a me vata wa kūsoma misoa ila yonanīt'we kwondū wa
            küīkiithya mümanyīsya niwaïle kūmamanyīsya ūsũngīo kwa kila īkūlyo o
            vamwe na ndeto sya mūsoa ūla wa mbee ünenganītwe wa kūsomwa.
          </p>
          <p>
            Kila mūmanyiw'a e vata wa kūmanya ūsūngio wa kila ikūlyo, na ndeto
            sya mûsoa wa mbee üla ūnenganītwe kwondū wa kūsomwa. Mūmanyïsya
            vamwe na amanyïw'a me vata wa kūsoma misoa ila yonanīt'we kwondū wa
            küīkiithya mümanyīsya niwaïle kūmamanyīsya ūsũngīo kwa kila īkūlyo o
            vamwe na ndeto sya mūsoa ūla wa mbee ünenganītwe wa kūsomwa.
          </p>
        </div>
      )}
    </div>
  );
};

export default Introduction;
