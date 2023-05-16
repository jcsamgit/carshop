import React from 'react'
import './CSS/footer.css'

export default function Footer() {
  return (
    <div>
        <footer className="footerRedes">   
            <ul className="footerRedes__lista">
                <li className="footerRedes__item">
                    <a title='facebook' href="https://www.facebook.com/profile.php?id=100083603041302&mibextid=ZbWKwL" className="footerRedes__enlace facebook"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="footerRedes__item">
                    <a title='instagram' href="https://instagram.com/acaestatu0km?igshid=ZDdkNTZiNTM=" className="footerRedes__enlace   instagram"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="footerRedes__item">
                    <a title='tiktok' href="http://tiktok.com/@gerardopoloni" className="footerRedes__enlace tiktok"> <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg></i></a>
                    {/* <a href="https://www.instagram.com" className="footerRedes__enlace twitter"><i className="fab fa-twitter"></i></a> */}
                </li>
                
            </ul>
            
        </footer>
    </div>
  )
}
