import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            links: [
                { id: 0, text: 'Home', url: '/', isActive: true },
                { id: 1, text: 'Works', url: '/works', isActive: false },
                { id: 2, text: 'Resume', url: '/resume', isActive: false },
                { id: 3, text: 'Blog', url: '/blog', isActive: false },                
                { id: 4, text: 'Contact', url: '/contact', isActive: false },
            ],
            works: [
                {
                    id: 0,
                    name: 'Viking Quiz',
                    image: '/viking-quiz-preview.jpg',
                    imageAlt: 'Android App Viking Quiz Preview Image',
                    url: 'https://github.com/ClarkMitchell/VikingQuiz',
                    sourceUrl: 'https://github.com/ClarkMitchell/VikingQuiz',
                    text: 'A Viking Themed Native Quiz App For Android Devices.',
                },
                {
                    id: 1,
                    name: 'WhatBeer',
                    image: '/what-beer-preview.jpg',
                    imageAlt: 'What Beer Web App preview image',
                    url: 'https://ClarkMitchell.github.io/WhatBeer',
                    sourceUrl: 'https://github.com/ClarkMitchell/WhatBeer/tree/master',
                    text:
                        'A work in progress web app using Vuetify and RateBeer',
                },
                {
                    id: 2,
                    name: 'Drum Machine',
                    image: '/drum-machine-preview.jpg',
                    imageAlt: 'Drum Machine Project Preview Image',
                    url: 'https://clarkmitchell.github.io/drum-machine/',
                    sourceUrl: 'https://github.com/ClarkMitchell/drum-machine',
                    text: "An 80s' Themed Browser-Based Drum Machine.",
                },
                {
                    id: 3,
                    name: 'Spelling Quiz',
                    image: '/spelling-quiz-preview.jpg',
                    imageAlt: 'Speaking Spelling Java App Preview Image',
                    url:
                        'https://github.com/ClarkMitchell/SpellingQuiz/tree/master/SpellingQuiz/dist',
                    sourceUrl: 'https://github.com/ClarkMitchell/SpellingQuiz',
                    text: 'A Speaking and Spelling Education app written in Java.',
                },
                {
                    id: 4,
                    name: 'ClarkMitchell',
                    image: '/site-preview.jpg',
                    imageAlt: 'This site, ClarkMitchell.github.io',
                    url: 'https://ClarkMitchell.io',
                    sourceUrl: 'https://github.com/ClarkMitchell/Github-Pages-Source',
                    text: 'This site made using a combination of Vue.js and Nuxt.',
                },
                {
                    id: 5,
                    name: 'Wedding',
                    image: '/rebekah-and-clark.jpg',
                    imageAlt: 'A wedding site with a twilio RSVP app and API.',
                    url: 'https://rebekahandclark.com',
                    sourceUrl: 'https://github.com/ClarkMitchell/rebekah-and-clark',
                    text: 'A wedding site with a twilio RSVP app and API.',
                }
            ]
        },
        mutations: {
            setLinkIsActive(state, activeLink) {
                state.links.forEach(link => {
                    link.isActive = false;
                });
                //state.links[activeLink.id].isActive = true;
                state.links.find(link => link.url === activeLink.url).isActive = true;
            },
        },
        actions: {
            setLinkIsActive(vuexContext, link) {
                vuexContext.commit('setLinkIsActive', link);
            },
        },
        getters: {
            getLinks: state => {
                return state.links;
            },
            getLinkIsActive(link) {
                return state.links[link.id].isActive;
            },
            getWorks: state => {
                return state.works;
            },
        },
    })
}

export default createStore
