import React from 'react';

interface TypeformEmbedProps {
  src: string;
}

const TournamentForm: React.FC<TypeformEmbedProps> = ({ src }) => {
  return (
    <div className="w-full">
      <div data-tf-live={src}></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
  );
};

export default TournamentForm;