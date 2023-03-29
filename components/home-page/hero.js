import React from 'react';
import classes from './hero.module.css'
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/demo.png" alt="An image showing Max" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Pratik</h1>
            <p>I Blog about web development - especially fronted frameworks like Angular or React</p>
        </section>
    );
};

export default Hero;