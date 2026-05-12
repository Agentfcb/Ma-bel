import React from 'react';

const PaymentPage: React.FC = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1 className="page-title">Способы оплаты</h1>
        
        <div className="info-grid">
  
          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/card.png" alt="Карта" />
            </div>
            <h3>Банковской картой</h3>
            <p>Принимаем карты Visa, MasterCard, МИР. Оплата производится через защищенный платежный шлюз.</p>
          </div>


          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/cash.png" alt="Наличные" />
            </div>
            <h3>Наличными</h3>
            <p>Оплата наличными курьеру при получении или в нашем магазине. Выдаем чек и гарантийный талон.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/bank.png" alt="Банк" />
            </div>
            <h3>Безналичный расчет</h3>
            <p>Для юридических лиц с НДС и без НДС. Предоставляем полный пакет закрывающих документов.</p>
          </div>


          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/online-payment.png" alt="Онлайн" />
            </div>
            <h3>Онлайн-платежи</h3>
            <p>SberPay, Tinkoff Pay, Apple Pay, Google Pay. Быстрая оплата в один клик.</p>
          </div>


          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/installment.png" alt="Рассрочка" />
            </div>
            <h3>Рассрочка и кредит</h3>
            <p>Оформление рассрочки на 6-12 месяцев. Решение за 15 минут. Первый взнос от 0%.</p>
          </div>


          <div className="info-card">
            <div className="info-icon">
              <img src="/assets/icons/split.png" alt="Частями" />
            </div>
            <h3>Частями</h3>
            <p>Оплата в 4 части без переплат через сервис «Долями». Без справок о доходах.</p>
          </div>
        </div>

        <div className="info-note">
          <p><strong>Все платежи защищены!</strong> Мы используем современные технологии шифрования данных.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;