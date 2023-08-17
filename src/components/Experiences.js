import React from "react";
import { Container } from "react-bootstrap";

export const Experiences = () => {
    return (
        <div id = "experiences">
            <Container id="experiences-con">
                <h2>Deneyimler</h2>
                <div className="experiences-container">
                    <div className="experience">
                        <h3>İGDAŞ</h3>
                        <p>İş Zekası Çözümleri Stajyeri</p>
                        <p>Temmuz 2021 - Ağustos 2021</p>
                        <ul>
                            <li>ERP raporlama teknikleri üzerine araştırmalar yaptım.</li>
                            <li>BW4/HANA modelinin nasıl kullanılacağını ve SAP sistemi ile nasıl çalıştığını öğrendim.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h3>COWEALTHY</h3>
                        <p>Stajyer Yazılım Mühendisi</p>
                        <p>Ağustos 2021 - Eylül 2021</p>
                        <ul>
                            <li>Diğerlerine göre daha avantajlı olan bulut yazılım teknolojileri üzerine yapılan araştırmalar yaptım.</li>
                            <li>MySQL kullanarak çeşitli tabloları sorguladım.</li>
                            <li>Amaca uygun kullanılabilecek makine öğrenimi uygulamaları üzerine araştırma yaptım.</li>
                            <li>Flask API kullanımını öğrendim.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h3>İNNOVA</h3>
                        <p>Finans ve Sektör Uygulamaları Stajyeri</p>
                        <p>Ağustos 2022 - Eylül 2022</p>
                        <ul>
                            <li>SAP FI'da sıklıkla kullanılan tabloların kullanımı üzerinde çalıştım.</li>
                            <li>SAP ABAP programlama dili kullanılarak uygulanan SAP FI programlarını inceledim.</li>
                            <li>İncelenenlere benzer yeni SAP ABAP programları oluşturdum.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h3>ROKET WORKS</h3>
                        <p>Yarı Zamanlı Yazılım Mühendisi</p>
                        <p>Aralık 2022 - Haziran 2023</p>
                        <ul>
                            <li>HTML5, CSS ve JavaScript kullanarak web siteleri geliştirdim.</li>
                            <li>Drupal gibi CMS kullanan web siteleri geliştirdim.</li>
                            <li>React kullanarak bir proje üzerinde çalıştım.</li>
                            <li>Türkçe'de doğal dil işleme modeli oluşturdum.</li>
                            <li>AWS SAM, TypeScript ve Java Spring Boot kullanarak mikro hizmetler oluşturma üzerinde çalıştım.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}