import React from 'react'
import styles from"./Acordian.module.css"

const Acordian = () => {
  return (
    <div classNameName={styles.maindiv}>
        <p classNameName={styles.firstp}>Browse by:</p>
        <hr classNameName={styles.apnahr}/>

        <div classNameName={styles.atag}>
            <a href="#">Clothing</a>
          
            <a href="#">New!</a>
            <a href="#">Top-Rated</a>
            <a href="#">Activewear</a>
            <a href="#">Dresses</a>
            <a href="#">Intimates & Lingerie</a>
            <a href="#">Jackets</a>
            <a href="#">Jeans</a>
            <a href="#">Jumpsuits</a>
            <a href="#">Kimonos</a>

            <a href="#">Loungewear</a>

            <a href="#">Pants</a>

            <a href="#">Petites</a>
            <a href="3">Plus</a>
            <a href="#">Sets</a>
            <a href="3">Shorts</a>
            <a href="#">Skirts</a>
            <a href="3">Sleepwear</a>
            <a href="#">Sweaters</a>
            <a href="#">Swimwear</a>
            <a href="#">Tops & Tees</a>

        </div>

        <p classNameName={styles.firstp}>Filter by:</p>
        <hr classNameName={styles.apnahr}/>


        {/* //bootstrap part */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div classNameName="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Acordian
