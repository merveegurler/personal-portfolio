import React from "react";
import { Container } from "react-bootstrap";

export const Experiences = () => {
    const experiences = [
        ["İGDAŞ", "İş Zekası Çözümleri Stajyeri", "Temmuz 2021 - Ağustos 2021", 
            [
                "ERP raporlama teknikleri üzerine araştırmalar yaptım.", 
                "BW4/HANA modelinin nasıl kullanılacağını ve SAP sistemi ile nasıl çalıştığını öğrendim."
            ]
        ],
        ["COWEALTHY", "Stajyer Yazılım Mühendis", "Ağustos 2021 - Eylül 2021",
            [
                "Diğerlerine göre daha avantajlı olan bulut yazılım teknolojileri üzerine yapılan araştırmalar yaptım.",
                "MySQL kullanarak çeşitli tabloları sorguladım.",
                "Amaca uygun kullanılabilecek makine öğrenimi uygulamaları üzerine araştırma yaptım.",
                "Flask API kullanımını öğrendim."
            ]
        ],
        ["İNNOVA", "Finans ve Sektör Uygulamaları Stajyeri", "Ağustos 2022 - Eylül 2022",
            [
                "SAP FI'da sıklıkla kullanılan tabloların kullanımı üzerinde çalıştım.",
                "SAP ABAP programlama dili kullanılarak uygulanan SAP FI programlarını inceledim.",
                "İncelenenlere benzer yeni SAP ABAP programları oluşturdum."
            ]
        ],
        ["ROKET WORKS", "Yarı Zamanlı Yazılım Mühendisi", "Aralık 2022 - Haziran 2023",
            [
                "HTML5, CSS ve JavaScript kullanarak web siteleri geliştirdim.",
                "Drupal gibi CMS kullanan web siteleri geliştirdim.",
                "React kullanarak bir proje üzerinde çalıştım.",
                "Türkçe'de doğal dil işleme modeli oluşturdum.",
                "AWS SAM, TypeScript ve Java Spring Boot kullanarak mikro hizmetler oluşturma üzerinde çalıştım."
            ]

        ]
    ];

    const experience = experiences.map((experience) => (
        <div className="experience">
            <h3>{experience[0]}</h3>
            <p>{experience[1]}</p>
            <p>{experience[2]}</p>
            <ul>
                {
                    experience[3].map(
                        (item) => (
                            <li>{item}</li>
                        )
                    )
                }
            </ul>
        </div>
    ));

    return (
        <div id = "experiences">
            <Container id="experiences-con">
                <h2>Deneyimler</h2>
                <div className="experiences-container">
                    {experience}
                </div>
            </Container>
        </div>
    )
}