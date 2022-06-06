import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Gallery() {
    const itemData = [
        {
            img: 'https://live.staticflickr.com/4284/35350793371_3fc8f4217a_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4284/35350793371_3fc8f4217a_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4284/35350793371_3fc8f4217a_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4284/35350793371_3fc8f4217a_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4284/35350793371_3fc8f4217a_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4258/34674866053_714d933d1e_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4258/34674866053_714d933d1e_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4258/34674866053_714d933d1e_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4258/34674866053_714d933d1e_b.jpg',
            title: 'bilde'
        },
        {
            img: 'https://live.staticflickr.com/4258/34674866053_714d933d1e_b.jpg',
            title: 'bilde'
        }
    ]
  return (
    <Box sx={{ width: 500, height: 450}}>
        <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
  )
}
