import React from 'react';

const GuaranteesPage: React.FC = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1 className="page-title">Гарантии и возврат</h1>
        
        <div className="guarantees-content">
          <div className="guarantee-section">
            <div className="guarantee-icon">
              <img src="/assets/icons/quality1.png" alt="Качество" />
            </div>
            <h2>Гарантия качества</h2>
            <p>
              На всю мебель действует гарантия от производителя сроком от 12 до 36 месяцев. 
              В течение гарантийного срока мы бесплатно устраним любые дефекты, возникшие 
              по нашей вине.
            </p>
            <ul className="guarantee-list">
              <li>Гарантия на каркас — до 36 месяцев</li>
              <li>Гарантия на механизмы — 12-24 месяца</li>
              <li>Гарантия на обивку — 12 месяцев</li>
            </ul>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-icon">
              <img src="/assets/icons/return.png" alt="Возврат" />
            </div>
            <h2>Возврат товара</h2>
            <p>
              Вы можете вернуть товар в течение 14 дней с момента покупки, если он не подошёл 
              вам по цвету, размеру или комплектации. Товар должен быть в оригинальной упаковке 
              и не иметь следов использования.
            </p>
            <ul className="guarantee-list">
              <li>Возврат в течение 14 дней</li>
              <li>Сохранение товарного вида</li>
              <li>Возврат денег в течение 3-10 дней</li>
            </ul>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-icon">
              <img src="/assets/icons/exchange.png" alt="Обмен" />
            </div>
            <h2>Обмен товара</h2>
            <p>
              Если товар оказался бракованным, мы обменяем его на аналогичный или вернём деньги 
              в течение 10 дней. Доставка и подъем бракованного товара — за наш счёт.
            </p>
            <ul className="guarantee-list">
              <li>Обмен на аналогичный товар</li>
              <li>Или возврат полной стоимости</li>
              <li>Бесплатный вывоз брака</li>
            </ul>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-icon">
              <img src="/assets/icons/law.png" alt="Закон" />
            </div>
            <h2>Защита прав покупателя</h2>
            <p>
              Мы работаем в соответствии с Законом «О защите прав потребителей». 
              Все спорные вопросы решаем в досудебном порядке. Если вы недовольны 
              покупкой — мы найдём решение!
            </p>
          </div>
        </div>

        <div className="info-note">
          <p>
            <strong>Есть вопросы?</strong> Свяжитесь с нами по телефону или оставьте заявку — 
            мы поможем разобраться в любой ситуации!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteesPage;