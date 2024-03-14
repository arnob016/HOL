import React from 'react';
import Script from 'next/script';

interface TypeformEmbedProps {
  src: string;
}

const TournamentForm: React.FC<TypeformEmbedProps> = ({ src }) => {
  return (
    <div className="w-full">
      <div data-tf-live={src}></div>
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
    </div>
  );
};

export default TournamentForm;