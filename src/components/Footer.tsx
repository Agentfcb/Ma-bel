import React from 'react';
import FooterColumns from './FooterColumns';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <FooterColumns />

    
        <div className="footer-social">
          <p>Следите за обновлениями:</p>
          <div className="social-btns">
            <button className="social-btn vk">VK Вступить в группу</button>
            <button className="social-btn pinterest">P Подписаться</button>
          </div>
        </div>

   
        <div className="footer-bottom">
          <p className="copyright">© 2026 MABELE.ru — Интернет-магазин мебели</p>
          <div className="footer-links">
            <a href="#">Политика обработки персональных данных</a>
            <a href="#">Политика использования файлов Cookie</a>
            <a href="#">Правила работы сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;