const REDIRECT_URL = 'http://localhost:3000/newRequest?external=1';

namespace LegalAidWidget {

    export class Button {
        // protected id: number;
        // protected containerElement: HTMLElement;
        protected apiInstance: Api;
        protected partnerId: string;

        public constructor(instance: Api, partnerId: string) {
            this.apiInstance = instance;
            this.partnerId = partnerId;
            console.log('Button -> partnerId', partnerId)
        }

        public init(): void {
            const buttonEl = document.createElement('button');

            buttonEl.innerHTML = 'Ю';
            buttonEl.className = 'legal-aid-widget-button';
            buttonEl.id = 'legal-aid-widget';

            const style = document.createElement('style');
            style.innerHTML = `
                .legal-aid-widget-button {
                    position: absolute;
                    bottom: 12px;
                    right: 24px;
                    width: 48px;
                    height: 48px;
                    background: rgb(100, 78, 215);
                    color: #ffffff;
                    border: 1px solid rgb(100, 78, 215);
                    cursor: pointer;
                    border-radius: 50%;
                    transition: background 0.5s, box-shadow 0.5s;
                    font-size: 20px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: "Exo 2", sans-serif;
                }
    
                .legal-aid-widget-button:hover {
                    background: rgb(123, 97, 255);
                    box-shadow: 0 0 0 4px #3434341A;
                }
            `;
            document.head.appendChild(style);

            const urlWithParams = this.partnerId ? `${REDIRECT_URL}&id=${this.partnerId}` : REDIRECT_URL;

            buttonEl.onclick = () => {
                console.log('=== CLICK -> redirect to Create new request ===');
                window.open(urlWithParams, '_blank');
            }

            document.body.appendChild(buttonEl);
        }
    }

    export class Api {

        constructor() {
            this.runInitCallbacks = this.runInitCallbacks.bind(this);
        }

        // button widget
        public button(partnerId: string): Button {
            const widget = new Button(this, partnerId);
            console.log('Api.button -> widget', widget)
            widget.init();
            return widget;
        }

        // run callbacks
        public runInitCallbacks(): void {
            console.log('run run run -> runInitCallbacks')
            const legalAidWidgetInitCallbacks = (window as any).legalAidWidgetApiInitCallbacks;
            if (legalAidWidgetInitCallbacks && legalAidWidgetInitCallbacks.length) {
                setTimeout(() => {
                    let callback;
                    while (callback = legalAidWidgetInitCallbacks.shift()) {
                        try {
                            callback();
                        } catch (e) {
                            console.error('runInitCallbacks error', e);
                        }
                    }
                }, 0);
            }
        }
    }
}

if (typeof (window as any)['LegalAidWidgetApi'] === 'undefined') {
    console.log('Инициализация LegalAidWidgetApi...');
    // const urlParams = new URLSearchParams(window.location.search);
    // const partnerId = urlParams.get('id') || '';
    (window as any).LegalAidWidgetApi = new LegalAidWidget.Api();
    (window as any).LegalAidWidgetApi.runInitCallbacks();
    // (window as any).LegalAidWidgetApi.button(partnerId);
    console.log('LegalAidWidgetApi инициализирован.');
} else {
    console.log('LegalAidWidgetApi уже существует.');
}
