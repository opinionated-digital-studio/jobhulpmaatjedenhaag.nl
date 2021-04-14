const c1 = () => import(/* webpackChunkName: "page--src--templates--verhaal-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/templates/Verhaal.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ik-wil-hulp--success-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/ikWilHulp/success.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--ik-word-maatje--success-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/ikWordMaatje/success.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--main-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/templates/Main.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--verhalen-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/Verhalen.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--ik-wil-hulp--index-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/ikWilHulp/index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--ik-word-maatje--index-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/ikWordMaatje/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/Contact.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/About.vue")
const c10 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/node_modules/gridsome/app/pages/404.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/src/pages/Index.vue")

export default [
  {
    path: "/verhalen/rebecca/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--verhalen--rebecca-md" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/content/verhalen/rebecca.md")
    }
  },
  {
    path: "/verhalen/najib/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--verhalen--najib-md" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/content/verhalen/najib.md")
    }
  },
  {
    path: "/ik-wil-hulp/success/",
    component: c2
  },
  {
    path: "/ik-word-maatje/success/",
    component: c3
  },
  {
    path: "/over-ons/bestuur/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--main--over-ons--bestuur-md" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/content/main/overOns/bestuur.md")
    }
  },
  {
    path: "/verhalen/",
    component: c5
  },
  {
    path: "/over-ons/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--main--over-ons--index-md" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/content/main/overOns/index.md")
    }
  },
  {
    path: "/ik-wil-hulp/",
    component: c6
  },
  {
    path: "/ik-word-maatje/",
    component: c7
  },
  {
    path: "/de-maatjes/",
    component: c4,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--main--de-maatjes--index-md" */ "/home/pandu/git.opinionated.nl/jobhulpmaatjedenhaag.nl/content/main/deMaatjes/index.md")
    }
  },
  {
    path: "/contact/",
    component: c8
  },
  {
    path: "/about/",
    component: c9
  },
  {
    name: "404",
    path: "/404/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c10
  }
]
