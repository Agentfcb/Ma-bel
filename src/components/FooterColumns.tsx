import React from 'react';

const FooterColumns: React.FC = () => {
  return (
    <div className="footer-columns">
      <div className="footer-col">
        <h3>Все о «МА-БЕЛЬ»</h3>
        <ul>
          <li><a href="#">о компании</a></li>
          <li><a href="#">работа</a></li>
          <li><a href="#">отзывы</a></li>
          <li><a href="#">вакансии</a></li>
        </ul>
        <h3 style={{ marginTop: 20 }}>Наши услуги</h3>
        <ul>
          <li><a href="#">самовывоз</a></li>
          <li><a href="#">оплата</a></li>
          <li><a href="#">кредит</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Свяжитесь с нами</h3>
        <ul>
          <li><a href="#">контакты</a></li>
          <li><a href="#">адреса</a></li>
        </ul>
        <h3 style={{ marginTop: 20 }}>Для покупателей</h3>
        <ul>
          <li><a href="#">доставка</a></li>
          <li><a href="#">оплата</a></li>
          <li><a href="#">гарантия</a></li>
          <li><a href="#">сборка</a></li>
          <li><a href="#">возврат</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Для партнеров</h3>
        <ul>
          <li><a href="#">поставщикам</a></li>
          <li><a href="#">дизайнерам</a></li>
          <li><a href="#">услуги</a></li>
        </ul>
      </div>

      <div className="footer-qr-block">
        <p className="footer-qr-title">Заведите карту магазина прямо сейчас!</p>
        <div className="footer-qr-images">
          <img src="/assets/images/footer-promo.png" alt="Интерьер" className="promo" />
          <img src="/assets/images/qr.png" alt="QR" className="qr" />
        </div>
        <p style={{fontSize: '12px', margin: '12px 0 8px'}}>Загрузите приложение:</p>
        <div className="app-stores">
          <img src="/assets/images/app-store.png" alt="App Store" />
          <img src="/assets/images/google-play.png" alt="Google Play" />
        </div>
        <div className="footer-address">
          <span>📍 Октябрьский просп., 11, Владимир</span>
          <span className="hours">ежедневно, с 9:00 до 22:00</span>
        </div>
      </div>
    </div>
  );
};

export default FooterColumns;