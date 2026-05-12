import React from 'react';

const AssemblyPage: React.FC = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1 className="page-title">Услуги сборки</h1>
        
        <div className="assembly-intro">
          <p>
            Предлагаем профессиональную сборку мебели нашими специалистами. 
            Это сэкономит ваше время и гарантирует качественный результат.
          </p>
        </div>

        <h2 className="section-subtitle">Стоимость сборки</h2>
        
        <div className="price-list">
          <div className="price-item">
            <span className="price-name">Табуреты</span>
            <span className="price-value">от 300 ₽</span>
          </div>

          <div className="price-item">
            <span className="price-name">Диваны</span>
            <span className="price-value">от 800 ₽</span>
          </div>

          <div className="price-item">
            <span className="price-name">Кровати</span>
            <span className="price-value">от 1 200 ₽</span>
          </div>

          <div className="price-item">
            <span className="price-name">Кресло-качалки</span>
            <span className="price-value">от 1 500 ₽</span>
          </div>

          <div className="price-item">
            <span className="price-name">Обеденные и барные стулья</span>
            <span className="price-value">от 1 000 ₽</span>
          </div>

        </div>

        <div className="assembly-features">
          <div className="feature-box">
            <h3>Что входит:</h3>
            <ul>
              <li>Сборка мебели по инструкции</li>
              <li>Регулировка механизмов</li>
              <li>Установка фурнитуры</li>
              <li>Проверка качества сборки</li>
              <li>Уборка упаковки</li>
            </ul>
          </div>

          <div className="feature-box">
            <h3>Преимущества:</h3>
            <ul>
              <li>Опытные мастера (от 5 лет)</li>
              <li>Гарантия на сборку 12 месяцев</li>
              <li>Выезд в день обращения</li>
              <li>Все инструменты с собой</li>
              <li>Аккуратная работа</li>
            </ul>
          </div>
        </div>

        <div className="info-note">
          <p><strong>Важно!</strong> Точная стоимость сборки зависит от сложности изделия и указывается после осмотра.</p>
        </div>
      </div>
    </div>
  );
};

export default AssemblyPage;