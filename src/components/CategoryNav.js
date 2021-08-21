import React from 'react'
import {Accordion } from 'react-bootstrap'

function CategoryNav() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Лаптопи</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                        <a className="nav-link" href="#">Dell</a>
                        <a className="nav-link" href="#">Asus</a>
                        <a className="nav-link" href="#">Lenovo</a>
                        <a className="nav-link" href="#">Acer</a>
                        <a className="nav-link" href="#">HP</a>
                        <a className="nav-link" href="#">Huawei</a>
                        <a className="nav-link" href="#">MSI</a>
                        <a className="nav-link" href="#">Apple</a>
                        <a className="nav-link" href="#">Microsoft</a>
                        <a className="nav-link" href="#">Toshiba</a>
                        <a className="nav-link" href="#">Fujitsu</a>
                        <a className="nav-link" href="#">Prestigio</a>
                        <a className="nav-link" href="#">Gigabyte</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Периферия и Софтуер</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Слушалки</a>
                        <a className="nav-link" href="#">Мишки</a>
                        <a className="nav-link" href="#">Падове</a>
                        <a className="nav-link" href="#">Клавиатури</a>
                        <a className="nav-link" href="#">Колони</a>
                        <a className="nav-link" href="#">Микрофони</a>
                        <a className="nav-link" href="#">Подложки</a>
                        <a className="nav-link" href="#">Външни дискове</a>
                        <a className="nav-link" href="#">Рутери</a>
                        <a className="nav-link" href="#">Външни DVD</a>
                        <a className="nav-link" href="#">Storage NAS</a>
                        <a className="nav-link" href="#">Докинг станции</a>
                        <a className="nav-link" href="#">USB Хъб</a>
                        <a className="nav-link" href="#">Волани</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Чанти и Раници</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                        <a className="nav-link" href="#">Golla</a>
                        <a className="nav-link" href="#">Dakine</a>
                        <a className="nav-link" href="#">Case Logic</a>
                        <a className="nav-link" href="#">Targus</a>
                        <a className="nav-link" href="#">Hama</a>
                        <a className="nav-link" href="#">HP</a>
                        <a className="nav-link" href="#">DELL</a>
                        <a className="nav-link" href="#">Lenovo</a>
                        <a className="nav-link" href="#">Dicota</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>G:RIGS и Компютри</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                        <a className="nav-link" href="#">Absolute</a>
                        <a className="nav-link" href="#">Cougar Gaming</a>
                        <a className="nav-link" href="#">be quiet!</a>
                        <a className="nav-link" href="#">Creator</a>
                        <a className="nav-link" href="#">Corsair Gaming</a>
                        <a className="nav-link" href="#">Powered by ASUS</a>
                        <a className="nav-link" href="#">VIP</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Монитори</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                        <a className="nav-link" href="#">Dell</a>
                        <a className="nav-link" href="#">Acer</a>
                        <a className="nav-link" href="#">LG</a>
                        <a className="nav-link" href="#">AOC</a>
                        <a className="nav-link" href="#">Asus</a>
                        <a className="nav-link" href="#">HP</a>
                        <a className="nav-link" href="#">Philips</a>
                        <a className="nav-link" href="#">BenQ</a>
                        <a className="nav-link" href="#">Lenovo</a>
                        <a className="nav-link" href="#">MSI</a>
                        <a className="nav-link" href="#">Eizo</a>
                        <a className="nav-link" href="#">Apple</a>
                        <a className="nav-link" href="#">Fujitsu</a>
                        <a className="nav-link" href="#">HANNSpree</a>
                        <a className="nav-link" href="#">IIYAMA</a>
                        <a className="nav-link" href="#">NEC</a>
                        <a className="nav-link" href="#">Samsung</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Компоненти и Видео Карти</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Смартфони и Smart Live</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Смарт часовници и гривни</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Таблети и Електронни четци</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>Tv, Аудио и Проектори</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header>Принтери и консумативи</Accordion.Header>
                    <Accordion.Body>
                        <a className="nav-link" href="#">Всички</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default CategoryNav
