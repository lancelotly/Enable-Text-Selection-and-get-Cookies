// ==UserScript==
// @name         Enable Text Selection and Get Cookies
// @namespace    https://greasyfork.org/users/296362
// @updateURL    https://greasyfork.org/scripts/471743-enable-text-selection-and-get-cookies/code/Enable%20Text%20Selection%20and%20Get%20Cookies.user.js
// @version      23.07.26.1
// @description  Adds draggable buttons to enable text selection and get cookies of the current page
// @match        http*://*/*
// @exclude      https://*.figma.com/*
// @exclude      https://*.google.com/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let enableCopyButton;
    let cookieButton;
    let isClicked = false;

    function enableTextSelection(e) {
        e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation();

        applyTextSelection();
        const events = ['copy', 'cut', 'contextmenu', 'selectstart', 'mousedown', 'mouseup', 'mousemove', 'keydown', 'keypress', 'keyup'];
        events.forEach(event => {
            document.documentElement.addEventListener(event, stopPropagation, {capture: true});
        });
        alert('Text selection enabled!');

        isClicked = true;
        enableCopyButton.innerText = '🔓';
        enableCopyButton.removeEventListener('click', enableTextSelection);
    }

    function applyTextSelection() {
        document.querySelectorAll('*').forEach(function (element) {
            if (window.getComputedStyle(element, null).getPropertyValue('user-select') === 'none') {
                element.style.setProperty('user-select', 'text', 'important');
            }
        });
    }

    function getCookieString() {
        const cookies = document.cookie;
        prompt("Cookie Data:", cookies);

        const name = prompt("Enter the localStorage name you'd like to access:", "access_token");
        const localStorageItem = localStorage.getItem(name);
        prompt("localStorageItem:", localStorageItem);
    }

    function stopPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation && event.stopImmediatePropagation();
    }

    function findMaxZindex() {
        const zIndexes = [];
        document
            .querySelectorAll("*")
            .forEach(el => {
            const zIndex = parseInt(window.getComputedStyle(el).zIndex, 10);
            if (!isNaN(zIndex)) {
                zIndexes.push(zIndex);
            }
        });
        return Math.max.apply(1, zIndexes);
    }


    function makeDraggable(button) {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        function onMousedown(e) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startLeft = button.offsetLeft;
            startTop = button.offsetTop;
            document.addEventListener('mousemove', onMousemove);
            document.addEventListener('mouseup', onMouseup);
        }

        function onMousemove(e) {
            if (isDragging) {
                const dx = e.clientX - startLeft;
                const dy = e.clientY - startTop;
                moveButtonBy(dx, dy);
            }
        }

        function moveButtonBy(dx, dy) {
            button.style.transform = `translate(${dx}px, ${dy}px)`;
        }

        function onMouseup(e) {
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
            startLeft = button.offsetLeft;
            startTop = button.offsetTop;
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('mouseup', onMouseup);
        }

        button.addEventListener('mousedown', onMousedown);
    }

    ///////


    const enableCopyStyle = {
        position: 'fixed',
        top: '85%',
        right: '50px',
        transform: 'translateY(-50%)',
        zIndex: findMaxZindex() + 1
    }

    const cookieStyle = {
        position: 'fixed',
        top: '85%',
        right: '100px',
        transform: 'translateY(-50%)',
        zIndex: findMaxZindex() + 1
    }

    function addButton() {
        const enableCopyButton = document.createElement('button');
        enableCopyButton.classList.add('enable-copy-button');
        Object.assign(enableCopyButton.style, enableCopyStyle);
        enableCopyButton.innerText = '🔓';
        enableCopyButton.addEventListener('click', enableTextSelection);

        const cookieButton = document.createElement('button');
        cookieButton.classList.add('cookie-button');
        Object.assign(cookieButton.style, cookieStyle);
        cookieButton.innerText = '🍪';
        cookieButton.addEventListener('click', getCookieString);

        document.body.append(enableCopyButton, cookieButton);
        makeDraggable(enableCopyButton);
        makeDraggable(cookieButton);
    }

    addButton();

})();
