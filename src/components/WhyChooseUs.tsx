import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">ПОЧЕМУ ВЫБИРАЮТ «МА-БЕЛЬ»?</h2>
        <div className="why-grid">
          
          <div className="why-card">
            <div className="why-card-top">
              <img src="/assets/icons/quality.png" alt="КАЧЕСТВО" className="why-icon" />
              <div className="why-label">КАЧЕСТВО</div>
            </div>
            <div className="why-card-bottom">
              <p className="why-text">Сертифицированные ткани категорий износостойкости 3-5, массив дерева вместо ДСП там, где нужна прочность, и экокожа</p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <img src="/assets/icons/design.png" alt="ДИЗАЙН" className="why-icon" />
              <div className="why-label">ДИЗАЙН</div>
            </div>
            <div className="why-card-bottom">
              <p className="why-text">Это продуманные линейки, которые сочетаются между собой и подходят под разные стили интерьера</p>
            </div>
          </div>


          <div className="why-card">
            <div className="why-card-top">
              <img src="/assets/icons/care.png" alt="ЗАБОТА" className="why-icon" />
              <div className="why-label">ЗАБОТА</div>
            </div>
            <div className="why-card-bottom">
              <p className="why-text">Если ткань испачкалась — подскажем, как очистить. Если кресло не подошло по цвету — примем обратно без лишних вопросов</p>
            </div>
          </div>


          <div className="why-card">
            <div className="why-card-top">
              <img src="/assets/icons/comfort.png" alt="КОМФОРТ" className="why-icon" />
              <div className="why-label">КОМФОРТ</div>
            </div>
            <div className="why-card-bottom">
              <p className="why-text">Каждое изделие тестируется на удобство посадки, поддержку спины и долговечность наполнителя</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;