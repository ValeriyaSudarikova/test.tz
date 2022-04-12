'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //cutting string

    const longStr = document.querySelector('#long');

    function cutStr(str) {
        let newStr = ' '
        if (str.innerHTML.length > 22) {
            newStr = str.innerHTML.substr(0, 22) + '...';
        }
        return str.innerHTML = newStr;
    }

    cutStr(longStr);

    //menu search 

    function searchData() {

        const menuSearch = document.querySelector('input').value,
        menuItems = document.querySelectorAll('.menu__item'),
        nameList = document.querySelectorAll('.menu__item-name');
        
        let menuData = [];

        const getData = (list, arr) => {
            list.forEach(item => {
                arr.push(item.innerHTML.toLowerCase());
            })
        }

        getData(nameList, menuData);

        for (let i = 0; i < menuData.length; i++) {
            if (menuData[i].includes(menuSearch)) {
                menuItems[i].classList.add('active');
            }
            else {
                menuItems[i].classList.remove('active');                 
            }
        }
    }

    document.querySelector('input').addEventListener('change', searchData);

    //changing content 

    function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, tabsBackLinkSelector) {

        let tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsBack = document.querySelectorAll(tabsBackLinkSelector),
            tabsParent = document.querySelector(tabsParentSelector);
    
        function hideTabContent() {
            
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }
        
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        
        tabsBack.forEach(item => {
            item.addEventListener('click', hideTabContent);
        })


    }

    tabs('.menu__item', '.tabs__item', '.menu__list', 'active', '.tabs__item-header .link')

    //return 

    // const mainLink = document.querySelector('.tabs__item-header .link');

    // mainLink.addEventListener('click', function() {
    //     document.querySelectorAll('.tabs__item').forEach(item => item.style.display = 'none');
    //     document.querySelector('#main').style.display = 'block';
    // })









});