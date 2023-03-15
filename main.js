import { header } from "./modules/header.js";
const headerElm = document.querySelector('header');
const title = document.querySelector('title');

const { pathname } = window.location

const path = pathname.split('.')[0].split('/')[1]


headerElm.innerHTML = header(path)
title.textContent += " Blog-" + path