import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">

      <section className="about-intro">
        <div className="container">
          <h1 className="page-title">О компании «МА-БЕЛЬ»</h1>
          <div className="about-text">
            <p>
              Наша компания <strong>«МА-БЕЛЬ»</strong> продает мебель больше 10 лет. 
              За это время мы обрели достойную репутацию, надежных партнеров, много отзывов от 
              благодарных покупателей, которые часто становятся нашими постоянными клиентами.
            </p>
            
            <h3>Мы предлагаем:</h3>
            <ul className="about-list">
              <li>корпусную и мягкую мебель для дома, офиса и дач;</li>
              <li>услуги по доставке мебели «до двери» по Владимиру, Владимирской области, в регионы РФ;</li>
              <li>профессиональную сборку, монтаж и установку мебели на месте;</li>
              <li>гарантийное обслуживание;</li>
              <li>быструю обратную связь.</li>
            </ul>
            
            <p>
              Мы сотрудничаем с более чем 60 российскими мебельными фабриками. Руководство 
              тщательно подходит к выбору своих партнеров, и в списке наших – только самые 
              лучшие производители мебели, результат работы которых проверен временем и 
              подтвержден безупречной репутацией.
            </p>
            
            <p>
              Один из основных принципов магазина – ориентация на интересы обычного, 
              среднестатистического жителя России, для которого главным критерием при 
              выборе мебели является ее стоимость. Поэтому мы стараемся сдерживать рост 
              цен, делая их максимально доступными для всех желающих, и данный принцип 
              не отражается на качестве изделий.
            </p>
            
            <p className="about-note">
              <strong>По желанию клиента возможно нанесение наклеек/картинок любых мультгероев 
              с согласия правообладателя.</strong>
            </p>
          </div>
        </div>
      </section>


      <section className="about-advantages">
        <div className="container">
          <h2 className="section-title">Наши преимущества</h2>
          <div className="advantages-grid">
            
            <div className="advantage-card">
              <div className="advantage-icon">🏭</div>
              <p>Более 10 000 товаров от 85 отечественных мебельных фабрик</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🏆</div>
              <p>Гарантия от 1 до 3 лет на все изделия каталога</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🔧</div>
              <p>Подъем мебели на этаж, сборка на месте</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🎁</div>
              <p>Частые акции и распродажи мебели с реальными скидками</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🚚</div>
              <p>Быстрая доставка или самовывоз в удобное для вас время</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">💳</div>
              <p>Много способов оплаты: наличными, с карты, банковским переводом, в кредит</p>
            </div>

          </div>
        </div>
      </section>


      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Остались вопросы?</h2>
              <p>Позвоните, наши специалисты готовы помочь в выборе изделий нужного цвета, размера, стиля.</p>
            </div>
            <div className="cta-phone">
              <p className="phone-hours">С 10:00 до 19:00</p>
              <a href="tel:88005052159" className="phone-number">+ 7 900 000-00-00</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;