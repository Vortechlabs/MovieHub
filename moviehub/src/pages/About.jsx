import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import about from '../assets/images/about.jpg';

export default function About() {
  return (
    <div className='flex w-screen'>
      <aside className='fixed h-screen w-1/3'>
        <img src={about} alt="" className='h-full w-full object-cover' />
      </aside>

    <div className='p-20 flex justify-end  '>
      <div className='w-[50%]'>
      
      <div className='text-center font-black text-4xl mb-10'>
        Frequently asked question(FAQ)
      </div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Apa yang bisa saya temukan di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Di MovieHub, Anda dapat menemukan informasi lengkap tentang film, termasuk sinopsis, 
        rating, ulasan, trailer, dan berita terbaru tentang industri film.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
            <Typography component="span">Bagaimana cara mencari film di MovieHub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Anda dapat menggunakan fitur pencarian di halaman utama MovieHub dengan memasukkan judul film yang ingin Anda cari. Anda juga dapat menjelajahi kategori atau genre film yang tersedia.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Apakah MovieHub memiliki aplikasi mobile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Saat ini, MovieHub hanya tersedia sebagai website. Namun, Anda dapat mengaksesnya melalui browser di perangkat mobile Anda.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    </div>
    </div>
  );
}