import {Login} from "../Page_object/Login_page.cy"  
import {MainCommands} from "../Page_object/All_pages_commands.cy" 

 const login = new Login()
 const mainCommands = new MainCommands()

 beforeEach(function(){
    login.loginUser('BT','BT')
    mainCommands.openPersonalArea('ТатьянаБелоусова')
   
})
it('Проверка страницы работа', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Работа','/work')
})
it('Проверка страницы адаптация', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Адаптация','/adaptation')
})
it('Проверка страницы карьера', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Карьера','/career')
})
it('Проверка страницы знания', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Знания','/knowledge')
})
it('Проверка страницы Обучение', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Обучение','/learning')
})
it('Проверка страницы Компетенции', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Компетенции','/assessment')
})
it('Проверка страницы цели', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Цели','/goals')
})
it('Проверка страницы документы', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Документы','/requests')
})
it('Проверка страницы льготы', function(){  
    mainCommands.openPersonalAreaTab('WT_0x60B893A903726D0D','Льготы','/benefits')
})