import  { Component } from 'react'
import './banner.scss'
import { Container } from '@mui/material'
import TypingEffect from './TypingEffect'
import CheckIcon from '@mui/icons-material/Check';

const teachs = [
  {
    text: 'Toshkent axborot texnologiyalari universiteti - 2017 - 2021 - Bakalavr'
  },
  {
    text: 'Toshkent axborot texnologiyalari universiteti - 2021 - 2023 - Magistratura'
  },
  {
    text: 'Irrigatsiya instituti - 2024 - Doktorantura'
  },
  {
    text: "Mutaxassislik: Ekonomist"
  }, 
  {
    text: "tourmad.uz platformasi asoschisi"
  }
]

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Container fixed className="content">
          <div className="left">
            <h1><TypingEffect text="  Shirinova Madinabonu Muradovna" speed={80}/></h1>
            {teachs.map((item, index) => <p key={index} className='animate__animated animate__fadeInUp'><CheckIcon style={{color: 'green'}} /> {item.text}</p>)}
            <br />
            <a href="https://tourmad.uz">tourmad.uz</a>
          </div>
          <div className="right">
            <img src="M3.png" alt=""  data-aos-duration="2000" className='animate__animated animate__zoomIn'/>
          </div>
        </Container>
      </div>
    )
  }
}
