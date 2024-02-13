import Section from '@/components/UI/Section';
import React from 'react';

export default function RegulationsPage() {
  return (
    <Section>
      <div className="regulations">
        <h1 className="subtitle regulations__title">
          ЧЕМПИОНАТ РЕСПУБЛИКИ БЕЛАРУСЬ ПО БРАЗИЛЬСКОМУ ДЖИУ-ДЖИТСУ «BELARUS NATIONAL CHAMPIONSHIP
          BJJ 2024 GI» СРЕДИ ДЕТЕЙ, ВЗРОСЛЫХ И ВЕТЕРАНОВ
        </h1>
        <h2 className="subtitle">ПОЛОЖЕНИЕ</h2>
        <div className="regulations__section">
          <h3 className="subtitle">ЦЕЛИ И ЗАДАЧИ</h3>
          <p className="text">
            Открытый турнир проводится в целях дальнейшего развития бразильского джиу-джитсу как
            вида спорта в Республике Беларусь и регионах и решает следующие задачи:
          </p>
          <ol>
            <li className="text" style={{ textIndent: '0' }}>
              Привлечение детей, подростков и взрослого населения Республики Беларусь и регионов к
              занятиям спортом и пропаганда здорового образа жизни;
            </li>
            <li className="text" style={{ textIndent: '0' }}>
              Повышение уровня мастерства спортсменов, подготовка к участию в международных
              соревнованиях;
            </li>
            <li className="text" style={{ textIndent: '0' }}>
              Оценка эффективности и анализ соревновательной деятельности спортсменов в бразильском
              джиу-джитсу;
            </li>
            <li className="text" style={{ textIndent: '0' }}>
              Укрепление дружеских связей и обмен опытом между спортсменами.
            </li>
          </ol>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">СРОКИ И МЕСТО ПРОВЕДЕНИЯ:</h3>
          <p className="text">
            Дата проведения: <b>16 марта 2024 года;</b>
          </p>
          <p className="text">
            Место проведения: <b>г. Минск, улица Героев 120-ой дивизии, 1</b>
          </p>
          <h4 className="text">16 марта 2024 года:</h4>
          <p className="text">08:00-9:30 – взвешивание дети, подростки, юниоры;</p>
          <p className="text">10:00-11:00 – схватки категорий KIDS 2, KIDS 3;</p>
          <p className="text">11.00-14.00 – схватки категорий INFANT, JUNIOR, TEEN, YOUTHS;</p>
          <p className="text">13.00-14.00 – взвешивание взрослые и ветераны;</p>
          <p className="text">
            14.00-18.00 – схватки категорий AMATEURS, ADVANCED, PROFESSIONALS, MASTERS.
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">РУКОВОДСТВО ПОДГОТОВКОЙ И ПРОВЕДЕНИЕ СОРЕВНОВАНИЙ:</h3>
          <p className="text">
            Общее руководство подготовкой и проведением соревнований возлагается на Общественное
            объединение «Федерация русского боевого искусства - РОСС» и непосредственно ее
            представителя <b>Лугина Сергея Владимировича</b>.
          </p>
          <p className="text">
            <b>Контактные телефоны:</b>
          </p>
          <p className="text">+375296276010</p>
          <p className="text">
            Непосредственно организаторы турнира отвечают за судейское и медицинское обеспечение
            соревнований. Допуск участников и судейство соревнований возлагается на главную
            судейскую коллегию. Главный судья турнира – <b>Чаплинский Игорь Викторович.</b>
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">УЧАСТНИКИ СОРЕВНОВАНИЙ:</h3>
          <p className="text">
            В соревнованиях участвуют спортсмены, имеющие стаж занятий любым видом борьбы не менее
            полтора года. Все спортсмены разделяются согласно поясной системы или стажа занятий.
            Спортсмен, который имеет стаж занятий более 2 лет (опыт участия в профи), спортивный
            разряд или звание в спортивных видах борьбы не может выступать по белым поясам.{' '}
            <b>Возраст участников определяется по дате рождения.</b>
          </p>
          <p className="text" style={{ fontWeight: 'bold' }}>
            Разделение в категориях AMATEURS, ADVANCED, PROFESSIONALS, MASTERS:
          </p>
          <p className="text">
            AMATEURS — белые пояса по бразильскому джиу-джитсу и/или люди с опытом в единоборствах
            меньше 2 лет.
          </p>
          <p className="text">
            ADVANCED — синие пояса по бразильскому джиу-джитсу и/или люди с опытом в единоборствах
            свыше 2 лет.
          </p>
          <p className="text">
            PROFESSIONALS — пурпурные/ коричневые/ черные пояса по бразильскому джиу-джитсу и/или
            люди с опытом в единоборствах свыше 5 лет.
          </p>
          <p className="text">
            MASTERS — спортсмены старше 30 лет, делятся на две категории:
            <br />
            - белые пояса по бразильскому джиу-джитсу и/или люди с опытом в единоборствах меньше 2
            лет,
            <br />- цветные пояса по бразильскому джиу-джитсу и/или люди с опытом в единоборствах
            свыше 2 лет.
          </p>
          <p className="text">
            Соревнования проводятся в соответствии с официальными международными правилами AJP
            JIU-JITSU
          </p>
          <p className="text">Возрастные и весовые категории:</p>
          <p className="text">
            <b>Дети KIDS 2 (6-7 лет)</b>: -18, -20, -23, -26, -30, -34, -38, -46 кг
          </p>
          <p className="text">
            <b>Дети KIDS 3 (8-9 лет)</b>: -21, -24, -27, -30, -34, -38, -42, -50 кг
          </p>
          <p className="text">
            <b>Дети INFANT (10-11 лет)</b>: -24, -27, -30, -34, -38, -42, -46, -50, -62 кг
          </p>
          <p className="text">
            <b>Мальчики JUNIOR (12-13 лет)</b>: -34, -37, -41, -45, -50, -55, -60, -66, -78 кг
          </p>
          <p className="text">
            <b>Девочки JUNIOR (12-13 лет)</b>: -32, -36, -40, -44, -48, -52, -57, -63, -75 кг
          </p>
          <p className="text">
            <b>Юноши TEEN (14-15 лет)</b>: -38, -42, -46, -50, -56, -62, -67, -72, -84 кг
          </p>
          <p className="text">
            <b>Девушки TEEN (14-15 лет)</b>: -36, -40, -44, -48, -52, -57, -63, -68, -80 кг
          </p>
          <p className="text">
            <b>Юноши YOUTHS (16-17 лет)</b>: -46, -50, -55, -60, -66, -73, -81, -94 кг
          </p>
          <p className="text">
            <b>Девушки YOUTHS (16-17 лет)</b>: -40, -44, -48, -52, -57, -63, -70, -82 кг
          </p>
          <p className="text">
            <b>Мужчины ADULT (18-29 лет)</b>: -56, -62, -69, -77, -85, -94, -120, +120 кг
          </p>
          <p className="text">
            <b>Женщины ADULT (18-29 лет)</b>: -49, -55, -62, -70, -95 кг
          </p>
          <p className="text">
            <b>Мужчины MASTER (30+ лет)</b>: -56, -62, -69, -77, -85, -94, -120, +120 кг
          </p>
          <p className="text">
            <b>Женщины MASTER (30+ лет)</b>: -49, -55, -62, -70, -95 кг
          </p>
          <p className="text">
            Регистрация и взвешивание будет проходить 16 марта по адресу г. Минск ул. Героев 120-й
            дивизии, 1, перед началом соревнований возрастных дивизионов. Также регистрацию и
            взвешивание можно будет пройти 15 марта по адресу г. Минск, ул. Лынькова, 19, Академия
            единоборств “Holy Family Gym” (тел: +375339177042) с 17:00 до 19:00. Одежда для
            взвешивания: шорты и майка.
          </p>
          <p className="text">
            <b>
              При участии в категории трех и менее спортсменов, они могут быть решением судейской
              коллегии объединены со смежной категорией.
            </b>
          </p>
          <p className="text">
            Продолжительность схватки: дети (6-7, 8-9 лет) – <b>2 минуты</b>, дети (10-11 лет) –{' '}
            <b>3 минуты</b>, подростки (12-13, 14-15 лет) – <b>3 минуты</b>, юниоры (16-17 лет) –{' '}
            <b>4 минуты</b>. Категории AMATEUR (18-29 лет) и MASTER (30+ лет) – <b>5 минут</b>,
            ADVANCED и PROFESSIONAL (18-29 лет) – <b>6 минут</b>.
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">ФОРМА ОДЕЖДЫ И ЗАЩИТНАЯ ЭКИПИРОВКА:</h3>
          <p className="text">
            К участию в турнире допускаются спортсмены, имеющие следующую экипировку: кимоно (GI)
            для занятий бразильским джиу-джитсу или дзюдо.
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">ОПРЕДЕЛЕНИЕ И НАГРАЖДЕНИЕ ПОБЕДИТЕЛЕЙ:</h3>
          <p className="text">
            Открытый турнир по бразильскому джиу-джитсу «BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI»
            будет проходить как соревнование в личном зачете и командном зачете. В командном зачете
            в возрастных категориях “Дети, подростки, юниоры” (6-17 лет), и “Взрослые” (18+ лет)
            команды победители и призеры награждаются памятными призами.
          </p>
          <p className="text">
            Турнир проводится по смешанной системе до двух поражений. Победители определяются в
            каждой весовой категории.
          </p>
          <p className="text">
            Победители турнира, занявшие первые места в каждой весовой категории, награждаются
            дипломами, эксклюзивными медалями и памятными призами, занявшие вторые и третьи места
            награждаются дипломами и эксклюзивными медалями.
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">ПОРЯДОК И СРОКИ ПОДАЧИ ЗАЯВОК:</h3>
          <p className="text">
            Предварительные заявки (форма заявки прилагается) с фото оплаты стартового взноса должны
            быть представлены в оргкомитет не позднее 12 марта 2024 года на электронный адрес{' '}
            <b>battalion.33a@gmail.com</b>. Спортсмены, не предоставившие заявки в указанной форме,
            к соревнованиям допущены не будут. После 24:00 часов 12 марта заявки на участие в
            турнире приниматься не будут.
          </p>
          <p className="text">
            Сайт оnline регистрации на турнир:{' '}
            <a
              href="https://bncbjj.site"
              style={{ textDecoration: 'underline', fontWeight: 'bold' }}
            >
              http://bncbjj.site
            </a>
          </p>
          <p className="text">
            При подаче заявки через сайт фото оплаты стартового взноса необходимо отправить на
            электронный адрес <b>battalion.33a@gmail.com</b>
          </p>
          <p className="text">
            Спортсмены обязаны предоставить окончательную заявку в установленной форме в мандатную
            комиссию не позднее чем за час до начала схваток 16 марта 2024 года. Стартовый взнос
            составляет 40 бел. рублей. Получатель платежа:
          </p>
          <p className="text" style={{ fontWeight: 'bold', textIndent: '0' }}>
            Общественное объединение «ФРБИ-РОСС»
            <br /> УНП 102314791 <br />
            Счет BY56REDJ30151007376930100933. <br />
            Реквизиты банка получателя: <br />
            ЗАО «РРБ-Банк» 220034, г. Минск, ул. Краснозвездная, 18. <br />
            УНП:100361187; <br />
            ОКПО:28614525 <br />
            Назначение платежа: взнос за участие в соревнованиях.
          </p>
          <p className="text">
            При подаче клубной заявки для команды свыше 10 спортсменов взнос за участие в
            соревнованиях составит 35 рублей с каждого участника, для команды свыше 20 спортсменов
            взнос за участие в соревнованиях составит 32,5 рубля с каждого спортсмена.
          </p>
          <p className="text">Для спортсменов, подающих личные заявки (без команды): </p>
          <p className="text">Ранняя регистрация (до 16 февраля) 35 рублей</p>
          <p className="text">Средняя регистрация (до 1 марта) 37,5 рублей</p>
          <p className="text">Поздняя регистрация (2-12 марта) 40 бел. рублей</p>
          <p className="text">
            Спортсмены, не предоставившие в указанные сроки предварительной заявки, опоздавшие или
            не пришедшие на взвешивание, к участию в турнире не допускаются.
          </p>
          <p className="text">
            В случае неявки заявленного спортсмена на турнир взнос не возвращается.
          </p>
          <p className="text">
            Все собранные взносы пойдут на развитие бразильского джиу-джитсу в Беларуси, благодарим
            за поддержку.
          </p>
          <p className="text" style={{ fontWeight: 'bold' }}>
            Каждый спортсмен до 18 лет обязан иметь медицинскую справку и медицинскую страховку,
            старше 18 лет – медицинскую страховку.
          </p>
        </div>
        <div className="regulations__section">
          <h3 className="subtitle">ФИНАНСИРОВАНИЕ ТУРНИРА</h3>
          <p className="text">
            Расходы, связанные с командированием, размещение и питанием участников и представителей
            команд несут командирующие организации.
          </p>
          <p className="text">
            Расходы, связанные с организацией, проведением турнира и награждением памятными призами
            несет ОО «ФРБИ-РОСС».
          </p>
        </div>
      </div>
    </Section>
  );
}
