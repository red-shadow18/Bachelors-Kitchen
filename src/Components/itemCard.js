import React from "react";

const Itemcard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <>
      <section className="main-container">
        {menuData.map((curElem) => {
          console.log(curElem);
          const { id, category, title, image, description, price } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number">{id}</span>
                    <span className="category">{category}</span>
                    <span className="title">{title}</span>
                    <span className="about">{description}</span>
                  </div>
                  <img className="photo" src={image} alt="image will be here" />

                  <img />
                  <span> {price}</span>
                  <br />
                  <button>Order Now</button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Itemcard;
