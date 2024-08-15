namespace LegalAidWidget {

    export class Button {
        // protected id: number;
        protected containerElement: HTMLElement;
        protected apiInstance: Api;

        public constructor(instance: Api, containerId: string) {
            this.apiInstance = instance;
            console.log('button cont -> containerId', containerId)
            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container with id ${containerId} not found`);
            }
            this.containerElement = container;
        }

        public init(): void {
            this.containerElement.innerHTML = '<button>Тык пык</button>';
            const buttonEl = this.containerElement.querySelector('button');
            if (buttonEl) {
                buttonEl.className = 'legal-aid-widget-button';
                buttonEl.addEventListener('click', () => {
                    console.log('=== CLICK ===');
                });
            }
        }
    }

    export class Api {

        // button widget
        public button(containerId: string): Button {
            const widget = new Button(this, containerId);
            console.log('Api.button -> widget', widget)
            widget.init();
            return widget;
        }

        // run callbacks
        public runInitCallbacks(): void {
            const myCompanyApiInitCallbacks = (window as any).legalAidWidgetApiInitCallbacks;
            if (myCompanyApiInitCallbacks && myCompanyApiInitCallbacks.length) {
                setTimeout(() => {
                    let callback;
                    while (callback = myCompanyApiInitCallbacks.shift()) {
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
    (window as any).LegalAidWidgetApi = new LegalAidWidget.Api();
    (window as any).LegalAidWidgetApi.runInitCallbacks();
    console.log('LegalAidWidgetApi инициализирован.');
} else {
    console.log('LegalAidWidgetApi уже существует.');
}
