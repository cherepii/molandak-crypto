# 🦄 NEXTJS template

## 💾Установка
PowerShell   
```Powershell
git clone https://github.com/Neca-development/next-template.git <ИМЯ ПАКЕТА> ; cd <ИМЯ ПАКЕТА> ; git remote remove origin ; npm i
```
Bash    
```Bash
git clone https://github.com/Neca-development/next-template.git <ИМЯ ПАКЕТА> && cd <ИМЯ ПАКЕТА> && git remote remove origin && npm i
```
## 💽Скрипты

1. `"dev"`:  запуск dev сервера приложения
2. `"build"`: билд приложения
3. `"start"`: старт последней версии собранного приложения
4. `"build-stats"`: билд приложения и бандл аналайзера
5. `"lint"`: запуск линтера без автофикса
6. `"lint:fix"`: запуск линтера и автофикса
7. `"check-types"`: проверка типов TS
8.  `"test"`: запуск unit тестов
9. `"commit"`: коммит зарегестрированных в гит изменений
10. `"postbuild"`:  автозапуск команды после билда
11. `"ac"`: комлексная команда которая запустит линтер, проверит типы, добавит все изменения в гит и сделает коммит

## 🆔Naming

1. **cebab-case, dot notaion**
    - слова разделяются дефисом
    - все маленькие буквы
    - *названия файла* . *тип файла* . *(ts | scss) ...*
2. **File types**
    - `.hook, .service, .util, .helper, .component, .types, .model, .config, .page`
    - Для файлов констант и enums `**scope**.constants.ts`

## 📜Conventions 
1. Все импорты между модулями делаем через **alias**, при необходимости можно добавить новые alias в проект
2. Для идентичности проектов `React` и `Next` пришлось выбрать вариант наименования страниц где в каждой папке со страницей лежит файл `index.page.ts`
3. Используется методология, которая не советует разделять файлы по их типам, следовательно если у вас есть хук `use-create-user` не надо создавать папку `entities/user/hooks`, а в ней файл `use-create-user.hook.ts`. Правильно будет создать файл `use-create-user.hook.ts` в папке `entities/user/model` или `features/create-user/model`
4. Обязательно Используем реэкспотры для реализации [public api](https://feature-sliced.design/ru/docs/reference/public-api)
5. Не используем `any`, используем `as` и `satisfies` где необходимо
6. Каталог `pages`: В каждой папке со страницей должен присутстовать файл `index.page.ts` в котором находится сам компонент страницы => *пример* `pages/about/index.page.ts` 
