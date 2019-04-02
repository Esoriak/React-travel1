import React from 'react';
import Travel from './Travel';

const travels = [
    {
      destination:
        "OSAKA",
      country: "Japon",
      image:
        "https://itourisme.net/wp-content/uploads/2016/09/top-10-things-to-do-in-osaka.jpg",
        distance: ' far far faaar awayy'
    },
    {
      destination: "OSLO",
      country: "Norvège",
      image:
        "https://blog.radissonblu.com/wp-content/uploads/2014/09/Hurtigruten-Geiranger-Fjord-Norway.jpg",
        distance: ' far faaar awayy'
    },
    {
      destination: "La lune",
      country: "Space Galaxie",
      image:
        "http://img.over-blog-kiwi.com/2/19/04/57/20170515/ob_576cd8_screenshot-66.png",
        distance: ' far far faaar awayy'
    },
    {
      destination:
        "Le pays de Shrek",
      country: "For for lointain",
      image:
        "https://i.ytimg.com/vi/UZYbVWzdFJc/maxresdefault.jpg",
        distance: ' far far faaar awayy'
    },
    {
        destination:
          "Bourg Palette",
        country: "Kanto-Johto",
        image:
          "https://www.pokepedia.fr/images/thumb/0/0d/%C3%89pisode_EP081.png/250px-%C3%89pisode_EP081.png",
          distance: ' far far faaar awayy'
      }
  ];
  
  const Travels = () => (
      <div>
      {travels.map(travel => <Travel {...travel} />
      )}
  </div>
  );

export default Travels;