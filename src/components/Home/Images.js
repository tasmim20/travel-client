import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 1140, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.worldtravelbd.com/wp-content/uploads/2020/08/cox.jpg',
    title: 'Cox.s Bazar',
    author: '@bkristastucchio',
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/70/25/28/pangthumai-waterfall.jpg?w=600&h=400&s=1',
    title: 'Sylhet',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://travel.discoverybangladesh.com/images/sylhet-sidebar.jpg',
    title: 'Jaflong',
    author: '@helloimnik',
  },
  {
    img: 'https://www.daily-sun.com/assets/news_images/2018/08/28/daily-sun-2018-08-28-50.jpg',
    title: 'Chittagong',
    author: '@nolanissac',
  },
  {
    img: 'https://porzoton.com/wp-content/uploads/elementor/thumbs/Gangamoti-Forest-Kuakata-oovanwkvplwakkrljv0mqaq1o8ebb3vgdcokmqx6dc.jpg',
    title: 'kuakata',
    author: '@hjrc33',
  },
  {
    img: 'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/1878484_Saint%20Martins%20Island%20Bangladesh.jpg',
    title: 'Saint Martin',
    author: '@arwinneil',
  },
  {
    img: 'https://www.holidify.com/images/cmsuploads/compressed/Beauty_of_sundarban_04_20220509173753.jpg',
    title: 'Sundarban',
    author: '@tjdragotta',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sixty_Dome_Mosque%2CBagerhat.jpg/1200px-Sixty_Dome_Mosque%2CBagerhat.jpg',
    title: 'Bagerhat',
    author: '@katie_wasserman',
  },
  {
    img: 'https://d2u0ktu8omkpf6.cloudfront.net/6bfa20f2868f3841f35e4e3eff6bfb21cea8c2ce308625a0.jpg',
    title: 'Panchagarh',
    author: '@silverdalex',
  },
  {
    img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/FAE7/production/_125613246_gettyimages-1241499750.jpg',
    title: 'Padma Bridge',
    author: '@shelleypauls',
  },
  {
    img: 'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/2162882_niladri-lake-sunamganj-Bangladesh.jpg',
    title: 'Sunamgonj',
    author: '@peterlaster',
  },
  {
    img: 'https://porzoton.com/wp-content/uploads/2020/09/Tanguar-Haor.jpg',
    title: 'Tanguar-Haor',
    author: '@southside_customs',
  },
];
