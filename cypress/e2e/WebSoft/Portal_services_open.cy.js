import {Login} from "../Page_object/Login_page.cy"  
import {MainCommands} from "../Page_object/All_pages_commands.cy" 

 const login = new Login()
 const mainCommands = new MainCommands()
 

 beforeEach(function(){
    login.loginUser('ag','ag')
    mainCommands.openMenuItemPage('Сервисы','WT_0x631729B832C5719F','/allservices')
})
it('Проверка сервиса Адресная книга', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Адресная книга','addressbook')
    mainCommands.findHeader('Адресная книга','WT_0x61F1768619716F1B')
})
it('Проверка сервиса Базы знаний', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Базы знаний','wikibases')
    mainCommands.findHeader('Базы знаний','WT_0x61F00AA43D163FBD')
})
it('Проверка сервиса Вакансии', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Вакансии','vacancys')
    mainCommands.findHeader('Вакансии компании','WT_0x61F17D0D0E541C24')
})
it('Проверка сервиса Видеопроекты', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Видеопроекты','videoprojects')
    mainCommands.findHeader('Видеопроекты','WT_0x62862AD871BE6689')
})
it('Проверка сервиса Вопросы эксперту', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Вопросы эксперту','expert_questions')
    mainCommands.findHeader('Вопросы эксперту','WT_0x61EE780F000D3B4C')
})
it('Проверка сервиса График отпусков', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','График отпусков','vacations')
    mainCommands.findHeader('График отпусков','WT_0x60F99E49622C7090')
})
it('Проверка сервиса Дни рождения', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Дни рождения','birthdays')
    mainCommands.findHeader('Дни рождения','WT_0x61EEDFD719C4657A')
})
it('Проверка сервиса Живая лента', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Живая лента','social')
    mainCommands.findHeader('Живая лента','WT_0x608C88044EE72BDA')
})
it('Проверка сервиса Кадровые комитеты', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Кадровые комитеты','personnel_committees')
    mainCommands.findHeader('Заседания кадрового комитета','WT_0x61E7AD45481406B0')
})
it('Проверка сервиса Кафетерий льгот', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Кафетерий льгот','cafeteria')
    mainCommands.findHeader('Кафетерий льгот','WT_0x633E8F1C1C3E328A')
})
it('Проверка сервиса Команда', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Команда','team')
    mainCommands.findHeader('Кабинет руководителя','WT_0x61DF1B0E0BD86DD5')
})
it('Проверка сервиса Компетенции', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Компетенции','competences')
    mainCommands.findHeader('Компетенции','WT_0x61F17F9760501390')
})
it('Проверка сервиса КЭДО', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','КЭДО','kedo')
    mainCommands.findHeader('Электронный документооборот','WT_0x621382A76A4D53DD')
})
it('Проверка сервиса Магазин призов', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Магазин призов','shop')
    mainCommands.findHeader('Магазин призов','WT_0x6336C799790376E0')
})
it('Проверка сервиса Мероприятия', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мероприятия','calendar')
    mainCommands.findHeader('Календарь учебных мероприятий','WT_0x612617833F9A28BB')
})
it('Проверка сервиса Модульные программы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Модульные программы','modul_programs')
    mainCommands.findHeader('Модульные программы','WT_0x61EFC8F462916CE0')
})
it('Проверка сервиса Новости', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Новости','news')
    mainCommands.findHeader('Новости','WT_0x61F16DF82F2136EA')
})
it('Проверка сервиса Новые сотрудники', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Новые сотрудники','newpersons')
    mainCommands.findHeader('Новые сотрудники','WT_0x61FAB8406EA14B8E')
})
it('Проверка сервиса Опросы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Опросы','polls')
    mainCommands.findHeader('Опросы','WT_0x61F170135B2E7E1E')
})
it('Проверка сервиса Преподаватели', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Преподаватели','lectors')
    mainCommands.findHeader('Тренеры','WT_0x60D435A329606C1A')
})
it('Проверка сервиса Проекты', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Проекты','projects')
    mainCommands.findHeader('Проекты','WT_0x61F2AD63603175FA')
})
it('Проверка сервиса Пространство знаний', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Пространство знаний','lxp')
    mainCommands.findHeader('Пространство знаний','WT_0x60D198783BFD7B27')
})
it('Проверка сервиса Процедуры оценки', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Процедуры оценки','evaluation_procedures')
    mainCommands.findHeader('Процедуры оценки','WT_0x628F90100B5171E7')
})
it('Проверка сервиса Рекомендованное обучение', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Рекомендованное обучение','recommend_learning')
    mainCommands.findHeader('Рекомендованное обучение','WT_0x60BF24423E8639F8')
})
it('Проверка сервиса Соревнования', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Соревнования','competitions')
    mainCommands.findHeader('Лидеры рейтинга','WT_0x6151CADD1959307A')
})
it('Проверка сервиса Тесты', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Тесты','assessments')
    mainCommands.findHeader('Тесты','WT_0x61EFEE420D834507')
})
it('Проверка сервиса Учебные организации', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Учебные организации','education_orgs')
    mainCommands.findHeader('Провайдеры','WT_0x61EFEEBA4A6F7107')
})
it('Проверка сервиса Учебные программы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Учебные программы','education_programs')
    mainCommands.findHeader('Учебные программы','WT_0x61EFED9C7495146B')
})
it('Проверка сервиса Форумы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Форумы','forums')
    mainCommands.findHeader('Форумы','WT_0x627E675B6D850588')
})
it('Проверка сервиса Эксперты', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Эксперты','lxpexperts')
    mainCommands.findHeader('Рейтинг экспертов','WT_0x60DA3CFB67641C6D')
})
it('Проверка сервиса Электронная библиотека', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Электронная библиотека','library')
    mainCommands.findHeader('Электронная библиотека','WT_0x60C8993F7A9369F5')
})
it('Проверка сервиса Электронные курсы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Электронные курсы','courses')
    mainCommands.findHeader('Электронные курсы','WT_0x61EFEF73486B2E13')
})
it('Проверка сервиса Прокторинг', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Интерфейс прокторинга','proctor')
    
})
it('Проверка сервиса Конструктор курсов', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Конструктор курсов','cx')
    
})
it('Проверка сервиса Редактор страниц', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Редактор страниц','lpe')
    
})
it('Проверка сервиса Центр аналитики', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Центр аналитики','analytics')
    
})
it('Проверка сервиса Чат', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Чат','chat')
    
})
it('Проверка сервиса Мое обучение', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мое обучение','learning')
    
})
it('Проверка сервиса Мои документы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои документы','requests')
    
})
it('Проверка сервиса Мои знания', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои знания','knowledge')
    
})
it('Проверка сервиса Мои компетенции', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои компетенции','assessment')
    
})
it('Проверка сервиса Мои льготы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои льготы','benefits')
    
})
it('Проверка сервиса Мои файлы', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои файлы','files')
    mainCommands.findHeader('Мои файлы','WT_0x625E694C25093947')
})
it('Проверка сервиса Мои цели', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мои цели','goals')
    
})
it('Проверка сервиса Мой график', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Мой график','workdays')
    mainCommands.findHeader('Рабочий график','WT_0x60E813CD07483CFA')
})
it('Проверка сервиса Моя адаптация', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Моя адаптация','adaptation')
    
})
it('Проверка сервиса Моя карьера', function(){  
    mainCommands.openServicesWidget('WT_0x631729F03515608B','Моя карьера','career')
    
})


