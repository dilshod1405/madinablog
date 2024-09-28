import { Component } from 'react'
import './header.scss'
import Container from '@mui/material/Container';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
            <Container fixed>
                <ul>
                    <li><a href="https://t.me/Madina2448"><TelegramIcon/></a></li>
                    <li><a href="https://www.instagram.com/madinabonu_shirinova/"><InstagramIcon/></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100092224326930&ref=xav_ig_profile_web"><FacebookIcon/></a></li>
                </ul>
            </Container>
        </div>
      </div>
    )
  }
}
