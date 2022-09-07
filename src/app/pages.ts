import { TuiDocPages } from "@taiga-ui/addon-doc";

export const pages: TuiDocPages = [{
    section: 'Tour UI Libraries',
    title: 'Material Design',
    route: 'md-menu'
}, {
    section: 'Tour UI Libraries',
    title: 'NG Bootstrap',
    route: 'ng-bootstrap'
}, {
    section: 'Tour UI Libraries',
    title: 'Ngx Bootstrap',
    route: 'ngx-bootstrap'
}, {
    section: 'Tour UI Libraries',
    title: 'Taiga UI',
    subPages: [{
        section: 'Tour UI Libraries',
        title: 'Dropdown',
        route: 'tui-dropdown'
    }, {
        section: 'Tour UI Libraries',
        title: 'Hint',
        route: 'tui-hint'
    }]
}, {
    section: 'Tour UI Libraries',
    title: 'Console',
    route: 'console'
}, {
    section: 'Tour UI Libraries',
    title: 'Ionic',
    route: 'ionic'
}];
