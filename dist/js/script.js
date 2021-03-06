'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //cutting string

    const longStr = document.querySelectorAll('.long');

    function cutStr(str) {
        let newStr = ' '
        if (str.innerHTML.length > 22) {
            newStr = str.innerHTML.substr(0, 22) + '...';
        }
        return str.innerHTML = newStr;
    }

    longStr.forEach(item => cutStr(item));

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

    //header link 

    const linksParent = document.querySelector('.links'),
          links = document.querySelectorAll('.menu__item-name'),
          menuList = document.querySelectorAll('.menu__item');
    
    let linksName = [];

    function getLinksNames(list, arr) {
        list.forEach(item => {
            arr.push(item.innerHTML);
        });
    }

    getLinksNames(links, linksName);

    const link = document.createElement('a');

    link.classList.add('links__main', 'name');

    menuList.forEach((item,i) => {
        item.addEventListener('click', function() {
            link.innerHTML = linksName[i];
            linksParent.appendChild(link);
        })
    })

    //open menu 

    const menuOpenTarget = document.querySelector('.menu__open'),
          menuCloseTarget = document.querySelector('.menu__close'),
          menuItems = document.querySelector('.menu__list');

    function menuOpen(openTarget, menu, closeTarget) {
        
        openTarget.addEventListener('click', () => {
            menu.style.display = 'block';
            closeTarget.style.display = 'block';
            openTarget.style.display = 'none';
        });
    }

    function menuClose (openTarget, menu, closeTarget) {

        closeTarget.addEventListener('click', () => {
            menu.style.display = 'none';
            closeTarget.style.display = 'none';
            openTarget.style.display = 'block';
        });
    }

    menuOpen(menuOpenTarget, menuItems, menuCloseTarget);
    menuClose(menuOpenTarget, menuItems, menuCloseTarget);






});