import React from "react";
import styles from "./style.css";
import leftArrow from "../img/left-arrow.png";
import rightArrow from "../img/right-arrow.png";

function Testimonials() {
    return (
        <div>
            <section id="Testimonials"></section>
            <div className={styles.container}>
                <h1 className={styles.testimonialsTittle}>Testimonials</h1>
                <p className={styles.testimonialsText}>
                    Natus totam voluptatibus animi aspernatur ducimus
                    quas <br /> obcaecati mollitia quibusdam temporibus culpa
                    dolore molestias blanditiis consequuntur sunt nisi.
                </p>
            </div>
            <div className={styles.carousel}>
                <div className={styles.slider1}>
                    <div className={styles.slides}>
                        <div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem.
                            </p>
                            <p className={styles.author}>— Joshua Smith</p>
                        </div>
                        <div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem.
                            </p>
                            <p className={styles.author}>— Joshua Smith</p>
                        </div>
                        <div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem.
                            </p>
                            <p className={styles.author}>— Joshua Smith</p>
                        </div>
                        <div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem.
                            </p>
                            <p className={styles.author}>— Joshua Smith</p>
                        </div>
                    </div>
                </div>
                <div className={styles.slider2}>
                    <div className={styles.slides2}>
                        <div>
                            <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/person_1.jpg.webp"></img>
                        </div>

                        <div>
                            <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/person_2.jpg.webp"></img>
                        </div>

                        <div>
                            <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/person_3.jpg.webp"></img>
                        </div>

                        <div>
                            <img className={styles.img} src="https://preview.colorlib.com/theme/expert/images/person_4.jpg.webp"></img>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.sliderButton1}><img className={styles.arrow} src={leftArrow} /></button>
                        <button className={styles.sliderButton2}><img className={styles.arrow} src={rightArrow} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;