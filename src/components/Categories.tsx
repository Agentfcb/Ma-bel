import React from 'react';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
        
        <div className="categories-grid">
          
          <div className="cat-card">
            <img src="/assets/images/cat-living.png" alt="Диваны" />
            <span className="cat-label">диваны для гостиной</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-dining.png" alt="Обеденные стулья" />
            <span className="cat-label">обеденные стулья</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-bar.png" alt="Барные стулья" />
            <span className="cat-label">барные стулья</span>
          </div>

          <div className="cat-card">
             <img src="/assets/images/cat-taburets.png" alt="Табуреты" />
             <span className="cat-label">табуреты</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-office.png" alt="Офисные кресла" />
            <span className="cat-label">офисные и компьютерные кресла</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-rocking.png" alt="Кресло-качалки" />
            <span className="cat-label">кресло-качалки</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-folding.png" alt="Раскладные" />
            <span className="cat-label">раскладные</span>
          </div>

          <div className="cat-card">
            <img src="/assets/images/cat-poufs.png" alt="Пуфы" />
            <span className="cat-label">пуфы и банкетки</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;