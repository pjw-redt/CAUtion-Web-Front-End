import React, {useState} from 'react'

// Component
import Nav from '../../Components/Nav'

// Styles
import styles from './styles/Home.module.css'
import Footer from "../../Components/footer/Footer";
import About from "../../Components/about/About";


function HomeImg() {
    return <img src={require(`./images/main_img.png`)} alt="main_img" className={styles.main_img}></img>
}


function HomeContents() {
    return <div className={styles.contents}>
        <h2 style={{"color":"#00B992"}}>'CAUtion'은..</h2>
        <div className={styles.text}>컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는 중앙대학교 소프트웨어학부 학과 동아리입니다. 동아리 명칭인 ‘CAUtion’은
            주의/경고/예방/조심을 의미하는 ‘caution’ 단어에서 중앙대학교를 의미하는 ‘CAU’를 강조하여 만들어졌습니다.
        </div>

        <br></br>
        <div className={styles.contents}>
            <About/>
        </div>
        <h2>With CAUtion</h2>
        <div className={styles.card_wrapper}>
            <Card title="D2 CAMPUS PARTNER" date="2022~"/>
            <Card title="HSpace" date="2022~"/>
            <Card title="INCOGNITO" date="2022~"/>
            <Card title="CCA" date="2022~"/>
        </div>
        <div className={styles.card_wrapper}>
            <Card title="BoB 총동문회 MOU" date="2023~"/>
        </div>

    </div>
}

const Shadows = () => {
    return (
        <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    );
}

function Card(props) {
    return <div className={styles.card}>
        <img src={require(`./images/${props.title}.png`)} alt={props.title} className={styles.card_img}></img>
        <h4>{props.title}</h4>
        {props.date}

    </div>
}

const Home = () => {
    return (
        <div>
            {/* Nav bar */}
            <Nav/>
            <HomeImg/>
            <div className={styles.home_container}>
                <HomeContents/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home