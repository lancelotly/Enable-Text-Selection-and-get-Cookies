// ==UserScript==
// @name         Enable Text Selection and Get Cookies
// @namespace    https://greasyfork.org/users/296362
// @version      26020330
// @author       Lancelotly.Sagirrarimeow
// @description  Adds draggable buttons to enable text selection and get cookies of the current page. [updates: - Click cancle to close browser alert.]
// @match        *://*/*
// @noframes
// @exclude      https://*.figma.com/*
// @exclude      https://*.google.com/*
// @icon         data:image/png;base64,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
// @grant        GM.cookie
// @run-at       document-idle
// @connect      *
// ==/UserScript==

(function () {
    'use strict';

    // --- Configuration ---
    const Z_INDEX = 2147483647; // Max 32-bit integer

    // --- Actions ---
    const actions = {
        unlock: {
            icon: '🔓',
            title: 'Enable Selection & Copy',
            active: false,
            // Re-usable handler to ensure we can remove it later
            handler: (e) => {
                e.stopPropagation();
                if (e.stopImmediatePropagation) e.stopImmediatePropagation();
            },
            fn: (btn) => {
                const EVENTS = ['copy', 'cut', 'contextmenu', 'selectstart', 'mousedown', 'mouseup', 'mousemove', 'keydown', 'keypress', 'keyup'];
                const ID = 'web-tools-unlock-style';

                if (actions.unlock.active) {
                    // --- DISABLE ---
                    const existing = document.getElementById(ID);
                    if (existing) existing.remove();

                    EVENTS.forEach(event => {
                        window.removeEventListener(event, actions.unlock.handler, { capture: true });
                    });

                    actions.unlock.active = false;
                    btn.style.opacity = '0.7';
                } else {
                    // --- ENABLE ---
                    // 1. CSS Injection (Global override)
                    const css = document.createElement('style');
                    css.id = ID;
                    css.textContent = `*,p,div{user-select:text!important;-moz-user-select:text!important;-webkit-user-select:text!important;pointer-events:auto!important;}`;
                    document.head.appendChild(css);

                    // 2. Inline Style Injection (For specific element overrides)
                    document.querySelectorAll('*').forEach(el => {
                        if (window.getComputedStyle(el).userSelect === 'none') {
                            el.style.setProperty('user-select', 'text', 'important');
                        }
                    });

                    // 3. Aggressive Event Stopping (The "Original" logic)
                    EVENTS.forEach(event => {
                        window.addEventListener(event, actions.unlock.handler, { capture: true });
                    });

                    actions.unlock.active = true;
                    btn.style.opacity = '1';
                    alert('Text selection enabled!');
                }
            }
        },
        cookie: {
            icon: '🍪',
            title: 'Copy Cookies & LocalStorage',
            fn: async () => {
                // Restore original 3-step prompt flow

                // 1. Get Cookies
                let cookieString = document.cookie.split(';').map(c => c.trim()).join('; ');

                // Try to upgrade to GM.cookie to get HttpOnly cookies
                if (typeof GM !== 'undefined' && GM.cookie) {
                    try {
                        const cs = await GM.cookie.list({ url: window.location.href });
                        cookieString = cs.map(c => `${c.name}=${c.value}`).join('; ');
                    } catch (e) {
                        console.error('GM.cookie failed, falling back to document.cookie', e);
                    }
                }

                const cookiePromptResult = prompt("Cookie Data: (please use ctrl+c or command+c to copy)", cookieString);
                if (cookiePromptResult === null) return;

                // 2. Ask for LocalStorage Key
                const namePromptResult = prompt("Enter the localStorage name you'd like to access:", "access_token");
                if (namePromptResult === null) return;

                // 3. Show LocalStorage Value
                const localStorageItem = localStorage.getItem(namePromptResult);
                prompt("localStorageItem:", localStorageItem);
            }
        },
        clean: {
            icon: '🧹',
            title: 'Nuke: Clear Cookies & LocalStorage',
            fn: () => {
                if (!confirm('Clear all cookies and local storage for this site?')) return;

                // Clear Local/Session Storage
                localStorage.clear();
                sessionStorage.clear();

                // Clear Cookies (brute force paths/domains)
                const cookies = document.cookie.split(";");
                const domainParts = location.hostname.split('.');

                cookies.forEach(c => {
                    const name = c.trim().split("=")[0];
                    const paths = ["/", location.pathname];

                    // Try clearing on current domain and wildcards
                    paths.forEach(path => {
                        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
                        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${location.hostname}`;

                        // Handle subdomains (e.g. .google.com)
                        if (domainParts.length > 1) {
                             document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=.${domainParts.slice(-2).join('.')}`;
                        }
                    });
                });

                location.reload();
            }
        }
    };

    // --- UI Construction (Shadow DOM) ---
    function init() {
        const host = document.createElement('div');
        host.id = 'web-tools-host';
        document.documentElement.appendChild(host);

        const shadow = host.attachShadow({ mode: 'open' });

        // Isolated CSS
        const style = document.createElement('style');
        style.textContent = `
            :host { all: initial; }
            .container {
                position: fixed;
                bottom: 10%;
                right: -1vw;
                z-index: ${Z_INDEX};
                display: flex;
                flex-direction: column;
                gap: 5px;
                transform: translateX(calc(100% - 30px)); /* Peek out */
                transition: transform 0.2s ease;
                font-family: sans-serif;
            }
            .container:hover {
                transform: translateX(0);
            }
            button {
                background: #333;
                color: #fff;
                border: 1px solid #555;
                border-right: none;
                padding: 5px 5px;
                cursor: pointer;
                font-size: 12px;
                border-radius: 4px 0 0 4px;
                opacity: 0.7;
                transition: all 0.2s;
                outline: none;
            }
            button:hover { opacity: 1; background: #444; padding-right: 15px; }
            button:active { background: #666; }
        `;
        shadow.appendChild(style);

        const container = document.createElement('div');
        container.className = 'container';

        // Generate Buttons
        Object.entries(actions).forEach(([key, action]) => {
            const btn = document.createElement('button');
            btn.innerText = action.icon;
            btn.title = action.title;
            btn.onclick = () => action.fn(btn);
            container.appendChild(btn);
        });

        shadow.appendChild(container);
    }

    init();

})();