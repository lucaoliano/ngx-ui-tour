!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PCNd:function(t,e,o){"use strict";o.d(e,"a",function(){return b});var r=o("ofXK"),c=o("fXoL"),b=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[r.b]]}),t}()},kucA:function(t,o,r){"use strict";r.d(o,"a",function(){return h});var c=r("fXoL"),b=r("LRne"),i=r("3E0/"),a=r("ofXK"),s=["tr-data-loading",""];function u(t,e){1&t&&(c.Rb(0),c.Tb(1,"strong"),c.Bc(2,"Loading data..."),c.Sb(),c.Qb())}function d(t,e){if(1&t&&(c.Bc(0),c.gc(1,"json")),2&t){var n=c.fc(2);c.Dc(" Fake data: ",c.hc(1,1,n.fakeData)," ")}}function l(t,e){if(1&t&&(c.Tb(0,"td",1),c.zc(1,u,3,0,"ng-container",2),c.zc(2,d,2,3,"ng-template",null,3,c.Ac),c.Sb()),2&t){var n=c.sc(3),o=c.fc();c.Bb(1),c.kc("ngIf",o.isLoading)("ngIfElse",n)}}var h=function(){var t=function(){function t(){n(this,t),this.dataLoadingChange=new c.n}return e(t,[{key:"loadData",value:function(){var t=this;this.isLoading=!0,this.dataLoadingChange.emit(this.isLoading),Object(b.a)([1,2,3]).pipe(Object(i.a)(1e3)).subscribe(function(e){t.isLoading=!1,t.fakeData=e,t.dataLoadingChange.emit(t.isLoading)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["","tr-data-loading",""]],outputs:{dataLoadingChange:"dataLoadingChange"},attrs:s,decls:1,vars:1,consts:[["colspan","4",4,"ngIf"],["colspan","4"],[4,"ngIf","ngIfElse"],["finishedLoading",""]],template:function(t,e){1&t&&c.zc(0,l,4,2,"td",0),2&t&&c.kc("ngIf",e.isLoading||e.fakeData)},directives:[a.l],pipes:[a.f],encapsulation:2}),t}()},lBDK:function(t,o,r){"use strict";r.r(o),r.d(o,"MdMenuModule",function(){return v});var c=r("ofXK"),b=r("tyNb"),i=r("5lpB"),a=r("kucA"),s=r("fXoL");function u(t,e){1&t&&(s.Rb(0),s.Tb(1,"td"),s.Bc(2,"waitFor"),s.Sb(),s.Tb(3,"td"),s.Bc(4,"Promise | Observable"),s.Sb(),s.Tb(5,"td"),s.Bc(6,"undefined"),s.Sb(),s.Tb(7,"td"),s.Bc(8," Waits for the given Promise or Observable before showing the step contents. "),s.Sb(),s.Qb())}var d,l=((d=function(){function t(e){n(this,t),this.tourService=e,this.isLoading=!1}return e(t,[{key:"ngOnInit",value:function(){this.subscribeToStartWaiting()}},{key:"subscribeToStartWaiting",value:function(){var t=this;this.startWaitingSubscription=this.tourService.startWaiting$.subscribe(function(){return t.dataLoadingCmp.loadData()})}},{key:"onLoadingChange",value:function(t){this.isLoading=t,this.isLoading||this.showAsyncStep()}},{key:"showAsyncStep",value:function(){this.tourService.steps.find(function(t){return"config.fakeData"===t.anchorId}).waitFor.next()}},{key:"ngOnDestroy",value:function(){this.startWaitingSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||d)(s.Nb(i.c))},d.\u0275cmp=s.Hb({type:d,selectors:[["docs"]],viewQuery:function(t,e){var n;1&t&&s.Hc(a.a,1),2&t&&s.rc(n=s.ec())&&(e.dataLoadingCmp=n.first)},decls:453,vars:8,consts:[["tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],["href","http://material.angular.io"],["tourAnchor","installation"],["href","https://material.angular.io/guide/getting-started"],["tourAnchor","usage"],["tourAnchor","tourService.start"],["href","https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu"],["href","https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu/mat-lazy-tour"],[1,"table"],["tourAnchor","config.anchorId"],["tourAnchor","config.enableBackdrop"],["tourAnchor","config.route"],["tourAnchor","config.nextStep"],["tourAnchor","config.buttons.custom"],["tourAnchor","config.waitFor"],[4,"ngIf"],["tourAnchor","config.fakeData","tr-data-loading","",3,"dataLoadingChange"],["tourAnchor","hotkeys"],["tourAnchor","events"],["tourAnchor","template"]],template:function(t,e){1&t&&(s.Tb(0,"h2"),s.Bc(1,"About"),s.Sb(),s.Tb(2,"p"),s.Bc(3,"This is a product tour library built with Angular (2+). It's inspired by "),s.Tb(4,"a",0),s.Bc(5,"angular-ui-tour"),s.Sb(),s.Bc(6,"."),s.Sb(),s.Tb(7,"p"),s.Tb(8,"code"),s.Bc(9,"TourMatMenuModule"),s.Sb(),s.Bc(10," is an implementation of the tour ui that uses "),s.Tb(11,"a",1),s.Bc(12,"Angular Material"),s.Sb(),s.Bc(13," MatMenu to display tour steps."),s.Sb(),s.Tb(14,"h2",2),s.Bc(15,"Installation"),s.Sb(),s.Tb(16,"ol"),s.Tb(17,"li"),s.Tb(18,"code"),s.Bc(19,"npm install ngx-ui-tour-core ngx-ui-tour-md-menu @angular/animations @angular/cdk @angular/http @angular/material"),s.Sb(),s.Sb(),s.Tb(20,"li"),s.Bc(21,"Import "),s.Tb(22,"code"),s.Bc(23,"TourMatMenuModule.forRoot()"),s.Sb(),s.Bc(24," into your app module"),s.Sb(),s.Tb(25,"li"),s.Bc(26,"Make sure "),s.Tb(27,"code"),s.Bc(28,"RouterModule"),s.Sb(),s.Bc(29," is imported in your app module"),s.Sb(),s.Tb(30,"li"),s.Bc(31,"Make sure Angular Material is "),s.Tb(32,"a",3),s.Bc(33,"installed correctly"),s.Sb(),s.Sb(),s.Sb(),s.Tb(34,"h2",4),s.Bc(35,"Usage"),s.Sb(),s.Tb(36,"h4"),s.Bc(37,"Simple project"),s.Sb(),s.Tb(38,"ol"),s.Tb(39,"li"),s.Bc(40,"Add "),s.Tb(41,"code"),s.Bc(42,"<tour-step-template></tour-step-template>"),s.Sb(),s.Bc(43," to your root app component"),s.Sb(),s.Tb(44,"li"),s.Bc(45," Define anchor points for the tour steps by adding the "),s.Tb(46,"code"),s.Bc(47,"tourAnchor"),s.Sb(),s.Bc(48," directive throughout your app. "),s.Tb(49,"pre"),s.Tb(50,"code"),s.Bc(51,'<div tourAnchor="some.anchor.id">...</div>'),s.Sb(),s.Sb(),s.Sb(),s.Tb(52,"li"),s.Bc(53," Define your tour steps using "),s.Tb(54,"code"),s.Bc(55,"tourService.initialize(steps)"),s.Sb(),s.Tb(56,"pre"),s.Bc(57),s.Sb(),s.Sb(),s.Tb(58,"li"),s.Bc(59,"Start the tour with "),s.Tb(60,"code",5),s.Bc(61,"tourService.start()"),s.Sb(),s.Sb(),s.Tb(62,"li"),s.Bc(63,"Check out the "),s.Tb(64,"a",6),s.Bc(65,"demo source code"),s.Sb(),s.Bc(66," for an example."),s.Sb(),s.Sb(),s.Tb(67,"h4"),s.Bc(68,"Lazy loaded modules"),s.Sb(),s.Tb(69,"ol"),s.Tb(70,"li"),s.Bc(71," Add "),s.Tb(72,"pre"),s.Tb(73,"code"),s.Bc(74,"<tour-step-template></tour-step-template>"),s.Sb(),s.Sb(),s.Bc(75," to your root app component. "),s.Sb(),s.Tb(76,"li"),s.Bc(77," Import "),s.Tb(78,"pre"),s.Tb(79,"code"),s.Bc(80,"TourMatMenuModule.forRoot()"),s.Sb(),s.Sb(),s.Bc(81," into your app module. "),s.Sb(),s.Tb(82,"li"),s.Bc(83," Import "),s.Tb(84,"pre"),s.Tb(85,"code"),s.Bc(86,"TourMatMenuModule"),s.Sb(),s.Sb(),s.Bc(87," into all lazy loaded modules needing the tour. "),s.Sb(),s.Tb(88,"li"),s.Bc(89," Import the "),s.Tb(90,"pre"),s.Tb(91,"code"),s.Bc(92,"TourService"),s.Sb(),s.Sb(),s.Bc(93," in your highest level eagerly loaded component and initialize all your steps there (even the ones in the lazy loaded modules). "),s.Tb(94,"strong"),s.Bc(95,"Note:"),s.Sb(),s.Bc(96," Make sure every step object contains its route. For example, if the route to a step is '/home' then your step object should have "),s.Tb(97,"code"),s.Bc(98,"route: '/home'"),s.Sb(),s.Bc(99," as a member. "),s.Sb(),s.Tb(100,"li"),s.Bc(101," Define anchor points for your steps by adding the "),s.Tb(102,"pre"),s.Tb(103,"code"),s.Bc(104,"tourAnchor"),s.Sb(),s.Sb(),s.Bc(105," directive throughout your modules (any component that requires it at any level). "),s.Tb(106,"pre"),s.Tb(107,"code"),s.Bc(108,'<div tourAnchor="some.anchor.id">...</div>'),s.Sb(),s.Sb(),s.Sb(),s.Tb(109,"li"),s.Bc(110," Start the tour with "),s.Tb(111,"pre"),s.Tb(112,"code"),s.Bc(113,"tourService.start()"),s.Sb(),s.Sb(),s.Bc(114," in the same component you initialized your steps. Call this right after the initialization. "),s.Sb(),s.Tb(115,"li"),s.Bc(116,"Check out the "),s.Tb(117,"a",7),s.Bc(118,"demo source code"),s.Sb(),s.Bc(119," for an example. "),s.Sb(),s.Sb(),s.Tb(120,"h2"),s.Bc(121,"TourService"),s.Sb(),s.Tb(122,"p"),s.Bc(123,"The "),s.Tb(124,"code"),s.Bc(125,"TourService"),s.Sb(),s.Bc(126," controls the tour. Some key functions include:"),s.Sb(),s.Tb(127,"dl"),s.Tb(128,"dt"),s.Bc(129,"start()"),s.Sb(),s.Tb(130,"dd"),s.Bc(131,"Starts the tour"),s.Sb(),s.Tb(132,"dt"),s.Bc(133,"startAt(stepId: number | string)"),s.Sb(),s.Tb(134,"dd"),s.Bc(135,"Start the tour at the step with stepId or at the specified index"),s.Sb(),s.Tb(136,"dt"),s.Bc(137,"end()"),s.Sb(),s.Tb(138,"dd"),s.Bc(139,"Ends the tour"),s.Sb(),s.Tb(140,"dt"),s.Bc(141,"pause()"),s.Sb(),s.Tb(142,"dd"),s.Bc(143,"Pauses the tour"),s.Sb(),s.Tb(144,"dt"),s.Bc(145,"resume()"),s.Sb(),s.Tb(146,"dd"),s.Bc(147,"Resumes the tour"),s.Sb(),s.Tb(148,"dt"),s.Bc(149,"next()"),s.Sb(),s.Tb(150,"dd"),s.Bc(151,"Goes to the next step"),s.Sb(),s.Tb(152,"dt"),s.Bc(153,"prev()"),s.Sb(),s.Tb(154,"dd"),s.Bc(155,"Goes to the previous step"),s.Sb(),s.Sb(),s.Tb(156,"h2"),s.Bc(157,"Step Configuration"),s.Sb(),s.Tb(158,"p"),s.Bc(159,"Each step can have the following properties."),s.Sb(),s.Tb(160,"table",8),s.Tb(161,"thead"),s.Tb(162,"tr"),s.Tb(163,"th"),s.Bc(164,"Name"),s.Sb(),s.Tb(165,"th"),s.Bc(166,"Type"),s.Sb(),s.Tb(167,"th"),s.Bc(168,"Default"),s.Sb(),s.Tb(169,"th"),s.Bc(170,"Description"),s.Sb(),s.Sb(),s.Sb(),s.Tb(171,"tbody"),s.Tb(172,"tr"),s.Tb(173,"td"),s.Bc(174,"stepId"),s.Sb(),s.Tb(175,"td"),s.Bc(176,"string"),s.Sb(),s.Tb(177,"td"),s.Bc(178,'""'),s.Sb(),s.Tb(179,"td"),s.Bc(180,"A unique identifier for the step"),s.Sb(),s.Sb(),s.Tb(181,"tr",9),s.Tb(182,"td"),s.Bc(183,"anchorId"),s.Sb(),s.Tb(184,"td"),s.Bc(185,"string"),s.Sb(),s.Tb(186,"td"),s.Bc(187,"required"),s.Sb(),s.Tb(188,"td"),s.Bc(189,"The anchor to which the step will be attached"),s.Sb(),s.Sb(),s.Tb(190,"tr"),s.Tb(191,"td"),s.Bc(192,"title"),s.Sb(),s.Tb(193,"td"),s.Bc(194,"string"),s.Sb(),s.Tb(195,"td"),s.Bc(196,'""'),s.Sb(),s.Tb(197,"td"),s.Bc(198,"The title of the tour step"),s.Sb(),s.Sb(),s.Tb(199,"tr"),s.Tb(200,"td"),s.Bc(201,"content"),s.Sb(),s.Tb(202,"td"),s.Bc(203,"string"),s.Sb(),s.Tb(204,"td"),s.Bc(205,'""'),s.Sb(),s.Tb(206,"td"),s.Bc(207,"The content text of the tour step"),s.Sb(),s.Sb(),s.Tb(208,"tr",10),s.Tb(209,"td"),s.Bc(210,"enableBackdrop"),s.Sb(),s.Tb(211,"td"),s.Bc(212,"boolean"),s.Sb(),s.Tb(213,"td"),s.Bc(214,"false"),s.Sb(),s.Tb(215,"td"),s.Bc(216,"Controls whether to enable active element highlighting"),s.Sb(),s.Sb(),s.Tb(217,"tr",11),s.Tb(218,"td"),s.Bc(219,"route"),s.Sb(),s.Tb(220,"td"),s.Bc(221,"string | UrlSegment[]"),s.Sb(),s.Tb(222,"td"),s.Bc(223,"undefined"),s.Sb(),s.Tb(224,"td"),s.Bc(225," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),s.Sb(),s.Sb(),s.Tb(226,"tr",12),s.Tb(227,"td"),s.Bc(228,"nextStep"),s.Sb(),s.Tb(229,"td"),s.Bc(230,"number | string"),s.Sb(),s.Tb(231,"td"),s.Bc(232,"undefined"),s.Sb(),s.Tb(233,"td"),s.Bc(234,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),s.Sb(),s.Sb(),s.Tb(235,"tr"),s.Tb(236,"td"),s.Bc(237,"prevStep"),s.Sb(),s.Tb(238,"td"),s.Bc(239,"number | string"),s.Sb(),s.Tb(240,"td"),s.Bc(241,"undefined"),s.Sb(),s.Tb(242,"td"),s.Bc(243,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),s.Sb(),s.Sb(),s.Tb(244,"tr"),s.Tb(245,"td"),s.Tb(246,"del"),s.Bc(247,"placement"),s.Sb(),s.Sb(),s.Tb(248,"td"),s.Bc(249,"N/A"),s.Sb(),s.Tb(250,"td"),s.Bc(251,"N/A"),s.Sb(),s.Tb(252,"td"),s.Bc(253," Ignored by "),s.Tb(254,"code"),s.Bc(255,"TourMatMenuModule"),s.Sb(),s.Sb(),s.Sb(),s.Tb(256,"tr"),s.Tb(257,"td"),s.Bc(258,"preventScrolling"),s.Sb(),s.Tb(259,"td"),s.Bc(260,"boolean"),s.Sb(),s.Tb(261,"td"),s.Bc(262,"false"),s.Sb(),s.Tb(263,"td"),s.Bc(264," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),s.Sb(),s.Sb(),s.Tb(265,"tr",13),s.Tb(266,"td"),s.Bc(267,"prevBtnTitle"),s.Sb(),s.Tb(268,"td"),s.Bc(269,"string"),s.Sb(),s.Tb(270,"td"),s.Bc(271,"false"),s.Sb(),s.Tb(272,"td"),s.Bc(273,' Sets a custom prev button title for a given step. Default is "Prev" '),s.Sb(),s.Sb(),s.Tb(274,"tr"),s.Tb(275,"td"),s.Bc(276,"nextBtnTitle"),s.Sb(),s.Tb(277,"td"),s.Bc(278,"string"),s.Sb(),s.Tb(279,"td"),s.Bc(280,"false"),s.Sb(),s.Tb(281,"td"),s.Bc(282,' Sets a custom next button title for a given step. Default is "Next" '),s.Sb(),s.Sb(),s.Tb(283,"tr"),s.Tb(284,"td"),s.Bc(285,"endBtnTitle"),s.Sb(),s.Tb(286,"td"),s.Bc(287,"string"),s.Sb(),s.Tb(288,"td"),s.Bc(289,"false"),s.Sb(),s.Tb(290,"td"),s.Bc(291,' Sets a custom end button title for a given step. Default is "End" '),s.Sb(),s.Sb(),s.Tb(292,"tr",14),s.zc(293,u,9,0,"ng-container",15),s.Sb(),s.Tb(294,"tr",16),s.dc("dataLoadingChange",function(t){return e.onLoadingChange(t)}),s.Sb(),s.Sb(),s.Sb(),s.Tb(295,"h2"),s.Bc(296,"Defaults"),s.Sb(),s.Tb(297,"p"),s.Bc(298,"You can set default values in the "),s.Tb(299,"code"),s.Bc(300,"TourService.initialize"),s.Sb(),s.Bc(301," function."),s.Sb(),s.Tb(302,"pre"),s.Bc(303),s.Sb(),s.Tb(304,"p"),s.Bc(305,"Any value explicitly defined in a step will override the default value."),s.Sb(),s.Tb(306,"h2",17),s.Bc(307,"Hotkeys"),s.Sb(),s.Tb(308,"p"),s.Bc(309," Hotkeys are provided using Angular's "),s.Tb(310,"code"),s.Bc(311,"@HostListener"),s.Sb(),s.Bc(312," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),s.Sb(),s.Tb(313,"ul"),s.Tb(314,"li"),s.Tb(315,"strong"),s.Bc(316,"left arrow"),s.Sb(),s.Tb(317,"span"),s.Bc(318," - previous step"),s.Sb(),s.Sb(),s.Tb(319,"li"),s.Tb(320,"strong"),s.Bc(321,"right arrow"),s.Sb(),s.Tb(322,"span"),s.Bc(323," - next step"),s.Sb(),s.Sb(),s.Tb(324,"li"),s.Tb(325,"strong"),s.Bc(326,"esc"),s.Sb(),s.Tb(327,"span"),s.Bc(328," - end tour"),s.Sb(),s.Sb(),s.Sb(),s.Tb(329,"p"),s.Bc(330," You can disable hotkeys by calling "),s.Tb(331,"code"),s.Bc(332,"tourService.disableHotkeys()"),s.Sb(),s.Bc(333," or re-enable with "),s.Tb(334,"code"),s.Bc(335,"tourService.enableHotkeys()"),s.Sb(),s.Sb(),s.Tb(336,"h2",18),s.Bc(337,"Event Observables"),s.Sb(),s.Tb(338,"p"),s.Bc(339,"The "),s.Tb(340,"code"),s.Bc(341,"TourService"),s.Sb(),s.Bc(342," emits events that can be subscribed to like this:"),s.Sb(),s.Tb(343,"pre"),s.Bc(344),s.Sb(),s.Tb(345,"table",8),s.Tb(346,"thead"),s.Tb(347,"tr"),s.Tb(348,"th"),s.Bc(349,"Name"),s.Sb(),s.Tb(350,"th"),s.Bc(351,"Payload"),s.Sb(),s.Tb(352,"th"),s.Bc(353,"Emitted When"),s.Sb(),s.Sb(),s.Sb(),s.Tb(354,"tbody"),s.Tb(355,"tr"),s.Tb(356,"td"),s.Bc(357,"stepShow$"),s.Sb(),s.Tb(358,"td"),s.Bc(359,"IStepOption"),s.Sb(),s.Tb(360,"td"),s.Bc(361,"A step is shown"),s.Sb(),s.Sb(),s.Tb(362,"tr"),s.Tb(363,"td"),s.Bc(364,"stepHide$"),s.Sb(),s.Tb(365,"td"),s.Bc(366,"IStepOption"),s.Sb(),s.Tb(367,"td"),s.Bc(368,"A step is hidden"),s.Sb(),s.Sb(),s.Tb(369,"tr"),s.Tb(370,"td"),s.Bc(371,"initialize$"),s.Sb(),s.Tb(372,"td"),s.Bc(373,"IStepOption[]"),s.Sb(),s.Tb(374,"td"),s.Bc(375,"The tour is configured with a set of steps"),s.Sb(),s.Sb(),s.Tb(376,"tr"),s.Tb(377,"td"),s.Bc(378,"start$"),s.Sb(),s.Tb(379,"td"),s.Bc(380,"IStepOption"),s.Sb(),s.Tb(381,"td"),s.Bc(382,"The tour begins"),s.Sb(),s.Sb(),s.Tb(383,"tr"),s.Tb(384,"td"),s.Bc(385,"end$"),s.Sb(),s.Tb(386,"td"),s.Bc(387,"any"),s.Sb(),s.Tb(388,"td"),s.Bc(389,"The tour ends"),s.Sb(),s.Sb(),s.Tb(390,"tr"),s.Tb(391,"td"),s.Bc(392,"pause$"),s.Sb(),s.Tb(393,"td"),s.Bc(394,"IStepOption"),s.Sb(),s.Tb(395,"td"),s.Bc(396,"The tour is paused"),s.Sb(),s.Sb(),s.Tb(397,"tr"),s.Tb(398,"td"),s.Bc(399,"resume$"),s.Sb(),s.Tb(400,"td"),s.Bc(401,"IStepOption"),s.Sb(),s.Tb(402,"td"),s.Bc(403,"The tour resumes"),s.Sb(),s.Sb(),s.Tb(404,"tr"),s.Tb(405,"td"),s.Bc(406,"anchorRegister$"),s.Sb(),s.Tb(407,"td"),s.Bc(408,"string"),s.Sb(),s.Tb(409,"td"),s.Bc(410,"An anchor is registered with the tour"),s.Sb(),s.Sb(),s.Tb(411,"tr"),s.Tb(412,"td"),s.Bc(413,"anchorUnregister$"),s.Sb(),s.Tb(414,"td"),s.Bc(415,"string"),s.Sb(),s.Tb(416,"td"),s.Bc(417,"An anchor is unregistered from the tour"),s.Sb(),s.Sb(),s.Tb(418,"tr"),s.Tb(419,"td"),s.Bc(420,"startWaiting$"),s.Sb(),s.Tb(421,"td"),s.Bc(422,"IStepOption"),s.Sb(),s.Tb(423,"td"),s.Bc(424,'Starts waiting for Promise or Observable set in "waitFor" config'),s.Sb(),s.Sb(),s.Tb(425,"tr"),s.Tb(426,"td"),s.Bc(427,"stopWaiting$"),s.Sb(),s.Tb(428,"td"),s.Bc(429,"IStepOption"),s.Sb(),s.Tb(430,"td"),s.Bc(431,'"waitFor" config Promise or Observable completes'),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(432,"h2",19),s.Bc(433,"Custom template"),s.Sb(),s.Tb(434,"p"),s.Bc(435," You can also customize the tour step template by providing an "),s.Tb(436,"code"),s.Bc(437,'<ng-template let-step="step" >'),s.Sb(),s.Bc(438," inside the "),s.Tb(439,"code"),s.Bc(440,"<tour-step-template>"),s.Sb(),s.Sb(),s.Tb(441,"p"),s.Bc(442," The default template is equivalent to this:\n"),s.Sb(),s.Tb(443,"pre"),s.Tb(444,"code"),s.Bc(445),s.Sb(),s.Sb(),s.Tb(446,"h2"),s.Bc(447,"Styling Active Tour Anchor"),s.Sb(),s.Tb(448,"p"),s.Bc(449," The currently active tour anchor element has a "),s.Tb(450,"code"),s.Bc(451,"touranchor--is-active"),s.Sb(),s.Bc(452," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),s.Sb()),2&t&&(s.Bb(57),s.Ec("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),s.Bb(236),s.kc("ngIf",!e.isLoading),s.Bb(10),s.Dc("this.tourService.initialize(steps, ","{","\n  route: '',\n  preventScrolling: true,\n});\n"),s.Bb(41),s.Dc("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"),s.Bb(101),s.Fc('<tour-step-template>\n  <ng-template let-step="step">\n    <mat-card (click)="$event.stopPropagation()">\n      <mat-card-title>\n        ',"{{","step?.title}}\n      </mat-card-title>\n      <mat-card-content>\n        ","{{",'step?.content}}\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">\n          <mat-icon>chevron_left</mat-icon>\n        </button>\n        <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">\n          <mat-icon>chevron_right</mat-icon>\n        </button>\n        <button mat-button (click)="tourService.end()">',"{{","step?.endBtnTitle}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n</tour-step-template>\n"))},directives:[i.a,c.l,a.a],encapsulation:2}),d),h=r("XNiG");function S(t,e){1&t&&(s.Bc(0),s.gc(1,"json")),2&t&&s.Dc(" ",s.hc(1,1,e.step),"\n")}var T,p,B,g=((p=function t(e){n(this,t),this.tourService=e,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",route:"",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"config.waitFor",content:"Tour step can wait for Promise or Observable before showing the step",title:"Wait for async event"},{anchorId:"config.fakeData",content:"Your fake data finished loading",title:"Loading finished",waitFor:new h.a},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"md-menu"}),this.tourService.start()}).\u0275fac=function(t){return new(t||p)(s.Nb(i.c))},p.\u0275cmp=s.Hb({type:p,selectors:[["md-menu-route"]],decls:8,vars:0,consts:[["href","https://github.com/isaacplmann/ng2-tour",1,"btn","btn-default"],["tourAnchor","start.tour",1,"btn","btn-primary",2,"cursor","pointer",3,"click"],["jsonTemplate",""]],template:function(t,e){1&t&&(s.Tb(0,"a",0),s.Bc(1,"View on GitHub"),s.Sb(),s.Tb(2,"a",1),s.dc("click",function(){return e.tourService.toggle()}),s.Bc(3,"Start Demo Tour"),s.Sb(),s.Ob(4,"router-outlet"),s.Ob(5,"tour-step-template"),s.zc(6,S,2,3,"ng-template",null,2,s.Ac))},directives:[i.a,b.f,i.d],pipes:[c.f],encapsulation:2}),p),f=((T=function t(){n(this,t)}).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=s.Hb({type:T,selectors:[["other-route"]],decls:5,vars:0,consts:[["tourAnchor","another.route"]],template:function(t,e){1&t&&(s.Tb(0,"p"),s.Bc(1,"This is the "),s.Tb(2,"strong",0),s.Bc(3,"another"),s.Sb(),s.Bc(4," route"),s.Sb())},directives:[i.a],encapsulation:2}),T),m=r("PCNd"),v=((B=function t(){n(this,t)}).\u0275fac=function(t){return new(t||B)},B.\u0275mod=s.Lb({type:B}),B.\u0275inj=s.Kb({imports:[[c.b,i.b.forRoot(),m.a,b.e.forChild([{component:g,path:"",children:[{component:l,path:""},{component:f,path:"other"}]}])]]}),B)}}])}();