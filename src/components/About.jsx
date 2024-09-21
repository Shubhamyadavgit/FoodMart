import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box sx={{
      my:15,
      textAlign:"center",
      padding:"2px",
      "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem",
      },
      "& p":{
        textAlign:"justify"
      },
      "@media(max-width:600px)":{
        mt:1,
        mb:5,
        "& h4 ":{
          fontSize:"1.5rem",
        }
      }
    }}>
      <Typography variant='h4'>Welcome To My Resturant</Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit dolor, corrupti quos, dignissimos blanditiis perspiciatis eligendi nam ullam optio nesciunt illum! Esse consequuntur ducimus commodi tenetur. Reprehenderit veniam, totam dolor corporis voluptatem maiores culpa quod in. Est, veritatis enim! Saepe architecto explicabo minima iure dolore aspernatur fuga quo dignissimos esse qui, nisi, est ex earum doloribus quod repellendus eaque iste laboriosam ut nobis distinctio. Maiores, officiis eum corporis a iure architecto adipisci ipsa fugit qui aut doloribus iste laborum modi alias placeat repellat vel sapiente tenetur inventore facere libero maxime. Aperiam veniam voluptas similique dolor quod, unde nemo libero!</p>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, nam vel aliquid repellat pariatur asperiores earum expedita, reprehenderit molestias ducimus illo illum repellendus aperiam facilis recusandae aliquam minus necessitatibus suscipit cupiditate id? Repellendus quos alias inventore consequuntur eos enim dicta architecto officiis dolorem ab doloribus nam deleniti neque quo, distinctio a tempore! Animi fugit odio esse, ipsa placeat eius illo laboriosam consectetur ipsam voluptates nisi vero minima debitis ullam a consequuntur aut quas sunt. Voluptates eligendi excepturi eius quae debitis voluptas doloremque repellat non mollitia distinctio, natus minima maxime asperiores, nam obcaecati beatae delectus corporis quod dolore dignissimos hic!</p>
    </Box>
  )
}

export default About